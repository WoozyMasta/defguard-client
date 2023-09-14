use chrono::NaiveDateTime;
use sqlx::{query, query_as, Error as SqlxError, FromRow};

use crate::{database::DbPool, error::Error};

#[derive(FromRow, Debug)]
pub struct Location {
    pub id: Option<i64>,
    pub instance_id: i64,
    pub name: String,
    pub address: String,
    pub pubkey: String,
    pub endpoint: String,
    pub allowed_ips: String,
}

#[derive(FromRow)]
pub struct LocationStats {
    id: Option<i64>,
    location_id: i64,
    upload: i64,
    download: i64,
    last_handshake: i64,
    collected_at: NaiveDateTime,
}

impl Location {
    pub fn new(
        instance_id: i64,
        name: String,
        address: String,
        pubkey: String,
        endpoint: String,
        allowed_ips: String,
    ) -> Self {
        Location {
            id: None,
            instance_id,
            name,
            address,
            pubkey,
            endpoint,
            allowed_ips,
        }
    }

    pub async fn all(pool: &DbPool) -> Result<Vec<Self>, Error> {
        let locations = query_as!(
            Self,
            "SELECT id \"id?\", instance_id, name, address, pubkey, endpoint, allowed_ips \
        FROM location;"
        )
        .fetch_all(pool)
        .await?;
        Ok(locations)
    }

    pub async fn save(&mut self, pool: &DbPool) -> Result<(), Error> {
        let result = query!(
            "INSERT INTO location (instance_id, name, address, pubkey, endpoint, allowed_ips) \
            VALUES ($1, $2, $3, $4, $5, $6) \
            RETURNING id;
            ",
            self.instance_id,
            self.name,
            self.address,
            self.pubkey,
            self.endpoint,
            self.allowed_ips,
        )
        .fetch_one(pool)
        .await?;
        self.id = Some(result.id);
        Ok(())
    }
    pub async fn find_by_id(pool: &DbPool, location_id: i64) -> Result<Option<Self>, SqlxError> {
        query_as!(
            Self,
            "SELECT id \"id?\", instance_id, name, address, pubkey, endpoint, allowed_ips \
            FROM location WHERE id = $1;",
            location_id
        )
        .fetch_optional(pool)
        .await
    }
}

impl LocationStats {
    pub fn new(
        location_id: i64,
        upload: i64,
        download: i64,
        last_handshake: i64,
        collected_at: NaiveDateTime,
    ) -> Self {
        LocationStats {
            id: None,
            location_id,
            upload,
            download,
            last_handshake,
            collected_at,
        }
    }

    pub async fn save(&mut self, pool: &DbPool) -> Result<(), Error> {
        let result = query!(
            "INSERT INTO location_stats (location_id, upload, download, last_handshake, collected_at) \
            VALUES ($1, $2, $3, $4, $5) \
            RETURNING id;",
            self.location_id,
            self.upload,
            self.download,
            self.last_handshake,
            self.collected_at,
        )
        .fetch_one(pool)
        .await?;
        self.id = Some(result.id);
        Ok(())
    }
}
