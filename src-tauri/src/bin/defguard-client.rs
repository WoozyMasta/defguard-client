//! defguard desktop client

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use lazy_static::lazy_static;
use log::{Level, LevelFilter};
#[cfg(target_os = "macos")]
use tauri::{api::process, Env};
use tauri::{Manager, State};
use tauri_plugin_log::LogTarget;

use defguard_client::{
    __cmd__active_connection, __cmd__all_connections, __cmd__all_instances, __cmd__all_locations,
    __cmd__all_tunnels, __cmd__connect, __cmd__delete_instance, __cmd__delete_tunnel,
    __cmd__disconnect, __cmd__get_latest_app_version, __cmd__get_settings, __cmd__last_connection,
    __cmd__location_interface_details, __cmd__location_stats, __cmd__open_link,
    __cmd__parse_tunnel_config, __cmd__save_device_config, __cmd__save_tunnel,
    __cmd__tunnel_details, __cmd__update_instance, __cmd__update_location_routing,
    __cmd__update_settings,
    appstate::AppState,
    commands::{
        active_connection, all_connections, all_instances, all_locations, all_tunnels, connect,
        delete_instance, delete_tunnel, disconnect, get_latest_app_version, get_settings,
        last_connection, location_interface_details, location_stats, open_link,
        parse_tunnel_config, save_device_config, save_tunnel, tunnel_details, update_instance,
        update_location_routing, update_settings,
    },
    database::{self, models::settings::Settings},
    latest_app_version::fetch_latest_app_version_loop,
    tray::{configure_tray_icon, create_tray_menu, handle_tray_event},
    utils::load_log_targets,
};
use std::{env, str::FromStr};

#[derive(Clone, serde::Serialize)]
struct Payload {
    args: Vec<String>,
    cwd: String,
}

#[macro_use]
extern crate log;

// for tauri log plugin
const LOG_TARGETS: [LogTarget; 2] = [LogTarget::Stdout, LogTarget::LogDir];

lazy_static! {
    static ref LOG_INCLUDES: Vec<String> = load_log_targets();
}

// TODO: Refactor later
#[allow(clippy::single_match)]
#[tokio::main]
async fn main() {
    // add bundled `wireguard-go` binary to PATH
    #[cfg(target_os = "macos")]
    {
        debug!("Adding bundled wireguard-go binary to PATH");
        let current_bin_path =
            process::current_binary(&Env::default()).expect("Failed to get current binary path");
        let current_bin_dir = current_bin_path
            .parent()
            .expect("Failed to get current binary directory");
        let current_path = env::var("PATH").expect("Failed to get current PATH variable");
        env::set_var(
            "PATH",
            format! {"{current_path}:{}", current_bin_dir.to_str().unwrap()},
        );
        debug!("Added binary dir {current_bin_dir:?} to PATH");
    }

    let tray_menu = create_tray_menu();
    let system_tray = tauri::SystemTray::new().with_menu(tray_menu);

    let log_level =
        LevelFilter::from_str(&env::var("DEFGUARD_CLIENT_LOG_LEVEL").unwrap_or("info".into()))
            .unwrap_or(LevelFilter::Info);

    let app = tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            all_locations,
            save_device_config,
            all_instances,
            connect,
            disconnect,
            update_instance,
            location_stats,
            location_interface_details,
            all_connections,
            last_connection,
            active_connection,
            update_location_routing,
            get_settings,
            update_settings,
            delete_instance,
            parse_tunnel_config,
            save_tunnel,
            all_tunnels,
            open_link,
            tunnel_details,
            delete_tunnel,
            get_latest_app_version,
        ])
        .on_window_event(|event| match event.event() {
            tauri::WindowEvent::CloseRequested { api, .. } => {
                event.window().hide().unwrap();
                api.prevent_close();
            }
            _ => {}
        })
        .system_tray(system_tray)
        .on_system_tray_event(handle_tray_event)
        .plugin(tauri_plugin_single_instance::init(|app, argv, cwd| {
            app.emit_all("single-instance", Payload { args: argv, cwd })
                .unwrap();
        }))
        .plugin(
            tauri_plugin_log::Builder::default()
                .targets(LOG_TARGETS)
                .level(log_level)
                .filter(|metadata| {
                    if metadata.level() == Level::Error {
                        return true;
                    }
                    if !LOG_INCLUDES.is_empty() {
                        for target in LOG_INCLUDES.iter() {
                            if metadata.target().contains(target) {
                                return true;
                            }
                        }
                        return false;
                    }
                    true
                })
                .build(),
        )
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .manage(AppState::default())
        .build(tauri::generate_context!())
        .expect("error while running tauri application");

    // initialize database
    let app_handle = app.handle();
    debug!("Initializing database connection");
    let app_state: State<AppState> = app_handle.state();
    let db = database::init_db(&app_handle)
        .await
        .expect("Database initialization failed");
    *app_state.db.lock().unwrap() = Some(db);
    info!("Database initialization completed");
    info!("Starting main app thread.");
    let result = database::info(&app_state.get_pool()).await;
    info!("Database info result: {:#?}", result);
    // configure tray
    if let Ok(settings) = Settings::get(&app_state.get_pool()).await {
        configure_tray_icon(&app_handle, &settings.tray_icon_theme).unwrap();
    }

    tauri::async_runtime::spawn(
        async move { fetch_latest_app_version_loop(app_handle.clone()).await },
    );

    // run app
    app.run(|app_handle, event| match event {
        // prevent shutdown on window close
        tauri::RunEvent::ExitRequested { api, .. } => {
            debug!("Received exit request");
            api.prevent_exit()
        }
        // handle shutdown
        tauri::RunEvent::Exit => {
            info!("Exiting event loop...");
            let app_state: State<AppState> = app_handle.state();
            tokio::task::block_in_place(|| {
                tokio::runtime::Handle::current().block_on(async {
                    let _ = app_state.close_all_connections().await;
                    app_handle.exit(0);
                });
            });
        }
        _ => {
            trace!("Received event: {event:?}")
        }
    });
}
