/* eslint-disable no-irregular-whitespace */
/* eslint-disable max-len */
import type { BaseTranslation } from '../i18n-types';

const ru = {
  time: {
    seconds: {
      singular: 'секунда',
      plural: 'секунды',
    },
    minutes: {
      singular: 'минута',
      plural: 'минуты',
    },
  },
  form: {
    errors: {
      invalid: 'Поле заполнено неверно',
      email: 'Введите действительный E-mail',
      required: 'Поле обязательно для заполнения',
      minLength: 'Минимальная длина {length: number}',
      maxLength: 'Максимальная длина {length: number}',
      specialsRequired: 'Необходим хотя бы один специальный символ',
      specialsForbidden: 'Специальные символы запрещены',
      numberRequired: 'Необходим хотя бы один номер',
      password: {
        floatingTitle: 'Пожалуйста, исправьте следующее:',
      },
      oneLower: 'Необходим хотя бы один символ в нижнем регистре',
      oneUpper: 'Необходим хотя бы один символ в верхнем регистре',
      duplicatedName: 'Устройство с таким именем уже существует',
    },
  },
  common: {
    controls: {
      back: 'Назад',
      next: 'Далее',
      submit: 'Отправить',
      cancel: 'Отмена',
      close: 'Закрыть',
      reset: 'Сбросить',
    },
    messages: {
      error: 'Произошла непредвиденная ошибка!',
    },
  },
  components: {
    adminInfo: {
      title: 'Вы администратор',
    },
  },
  pages: {
    client: {
      pages: {
        carouselPage: {
          slides: {
            shared: {
              //md
              isMore: '**defguard** это всё и даже больше!',
              githubButton: 'Посетите defguard на',
            },
            welcome: {
              // md
              title: 'Добро пожаловать в настольный клиент **defguard**!',
              instance: {
                title: 'Добавить сервер',
                subtitle:
                  'Установите соединение с сервером defguard, легко настроив его с помощью одного токена.',
              },
              tunnel: {
                title: 'Добавить туннель',
                subtitle:
                  'Используйте это как настольный клиент WireGuard®. Настройте свой собственный туннель или импортируйте файл конфигурации.',
              },
            },
            twoFa: {
              // md
              title: 'WireGuard **2FA с defguard**',
              // md
              sideText: `Так как протокол WireGuard не поддерживает 2FA/MFA - большинство (если не все) существующие клиенты WireGuard не поддерживают реальную двухфакторную аутентификацию/2FA - и используют 2FA только как авторизацию для самого "приложения" (а не для туннеля WireGuard). 

Если вы хотите защитить свой сервер WireGuard, попробуйте сервер VPN и SSO **defguard** (который также бесплатен и с открытым исходным кодом) для получения реальной 2FA с использованием PSK-ключей WireGuard и конфигурации участников через шлюз defguard!`,
            },
            security: {
              // md
              title: 'Безопасность и конфиденциальность **выполнены правильно!**',
              // md
              sideText: `* Конфиденциальность требует контроля над вашими данными, поэтому ваши пользовательские данные (идентификация, SSO) должны находиться на вашем сервере
* Защита ваших данных и приложений требует аутентификации и авторизации (SSO) с использованием многофакторной аутентификации, а для наивысшей безопасности - MFA с модулями аппаратной безопасности
* Безопасный и конфиденциальный доступ к вашим данным и приложениям требует шифрования данных (HTTPS) и защищенного туннеля между вашим устройством и Интернетом для шифрования всего трафика (VPN).
* Чтобы полностью доверять вашему SSO, VPN, он должен быть с открытым исходным кодом`,
            },
            instances: {
              // md
              title: '**Несколько** серверов и местоположений',
              // md
              sideText: `**defguard** (как сервер, так и этот клиент) поддерживают несколько серверов (установок) и несколько местоположений (VPN туннелей). 

Если вы администратор/devops - все ваши клиенты (сервера) и все их туннели (местоположения) могут быть в одном месте!`,
            },
            support: {
              // md
              title: '**Поддержите нас** на Github',
              // md
              text: `**defguard** бесплатен и действительно с открытым исходным кодом, и наша команда работала над ним несколько месяцев. Пожалуйста, рассмотрите возможность поддержать нас: `,
              githubText: `поставив звезду на`,
              githubLink: `GitHub`,
              spreadWordText: `распространяя информацию о:`,
              defguard: `defguard!`,
              joinMatrix: `присоединяйтесь к нашему серверу Matrix:`,
              supportUs: 'Поддержите нас!',
            },
          },
        },
        settingsPage: {
          title: 'Настройки',
          tabs: {
            global: {
              tray: {
                title: 'Системный трей',
                label: 'Тема иконки трея',
                options: {
                  color: 'Цветная',
                  white: 'Белая',
                  black: 'Чёрная',
                  gray: 'Серая',
                },
              },
              logging: {
                title: 'Порог логирования',
                options: {
                  error: 'Ошибка',
                  info: 'Информация',
                  debug: 'Отладка',
                  trace: 'Трассировка',
                },
              },
              theme: {
                title: 'Тема',
                options: {
                  light: 'Светлая',
                  dark: 'Тёмная',
                },
              },
              versionUpdate: {
                title: 'Обновления',
                checkboxTitle: 'Проверять наличие обновлений',
              },
            },
          },
        },
        createdPage: {
          tunnel: {
            title: 'Ваш туннель был успешно добавлен',
            content:
              'Ваш туннель был успешно добавлен. Теперь вы можете подключить это устройство, проверить его статус и просмотреть статистику, используя меню в левой боковой панели.',
            controls: {
              submit: 'Добавить еще один туннель',
            },
          },
          instance: {
            title: 'Ваш экземпляр был успешно добавлен',
            content:
              'Ваш экземпляр был успешно добавлен. Теперь вы можете подключить это устройство, проверить его статус и просмотреть статистику, используя меню в левой боковой панели.',
            controls: {
              submit: 'Добавить еще один экземпляр',
            },
          },
        },
        instancePage: {
          title: 'Местоположения',
          controls: {
            connect: 'Подключить',
            disconnect: 'Отключить',
            traffic: {
              predefinedTraffic: 'Предопределенный трафик',
              allTraffic: 'Весь трафик',
              label: 'Разрешенный трафик',
              helper: `
                <p>
                  <b>Предопределенный трафик</b> - маршрутизировать только трафик для сетей, определенных администратором через это местоположение VPN</br>
                  <b>Весь трафик</b> - маршрутизировать весь ваш сетевой трафик через это местоположение VPN
                </p>`,
            },
          },
          header: {
            title: 'Местоположения',
            edit: 'Редактировать экземпляр',
            filters: {
              views: {
                grid: 'Вид сеткой',
                detail: 'Детализированный вид',
              },
            },
          },
          connectionLabels: {
            lastConnectedFrom: 'Последнее подключение из',
            lastConnected: 'Последнее подключение',
            connectedFrom: 'Подключено из',
            assignedIp: 'Назначенный IP',
            active: 'Активный',
            neverConnected: 'Никогда не подключался',
          },
          locationNeverConnected: {
            title: 'Никогда не подключался',
            content:
              'Это устройство никогда не подключалось к этому местоположению, подключитесь, чтобы просмотреть статистику и информацию о подключении',
          },
          LocationNoStats: {
            title: 'Нет статистики',
            content:
              'У этого устройства нет статистики для этого местоположения за указанный период времени. Подключитесь к местоположению и подождите, пока клиент соберет статистику.',
          },
          detailView: {
            history: {
              title: 'История подключений',
              headers: {
                date: 'Дата',
                duration: 'Длительность',
                connectedFrom: 'Подключено из',
                upload: 'Загрузка',
                download: 'Скачивание',
              },
            },
            details: {
              title: 'Детали',
              logs: {
                title: 'Журнал',
              },
              info: {
                configuration: {
                  title: 'Конфигурация устройства',
                  pubkey: 'Публичный ключ',
                  address: 'Адреса',
                  listenPort: 'Порт прослушивания',
                },
                vpn: {
                  title: 'Конфигурация VPN-сервера',
                  pubkey: 'Публичный ключ',
                  serverAddress: 'Адрес сервера',
                  allowedIps: 'Разрешенные IP',
                  dns: 'DNS-серверы',
                  keepalive: 'Постоянное keepalive',
                  handshake: 'Последнее рукопожатие',
                  handshakeValue: '{seconds: number} секунд назад',
                },
              },
            },
          },
        },
        tunnelPage: {
          title: 'Туннели WireGuard',
          header: {
            edit: 'Редактировать туннель',
          },
        },

        editTunnelPage: {
          title: 'Редактировать туннель WireGuard®',
          messages: {
            editSuccess: 'Туннель отредактирован',
            editError: 'Ошибка редактирования туннеля',
          },
          controls: {
            save: 'Сохранить изменения',
          },
        },
        addTunnelPage: {
          title: 'Добавить туннель WireGuard®',
          forms: {
            initTunnel: {
              title: 'Пожалуйста, укажите URL экземпляра и токен',
              sections: {
                vpnServer: 'VPN-сервер',
                advancedOptions: 'Дополнительные настройки',
              },
              labels: {
                name: 'Имя туннеля',
                privateKey: 'Закрытый ключ',
                publicKey: 'Открытый ключ',
                address: 'Адрес',
                serverPubkey: 'Открытый ключ сервера',
                presharedKey: 'Предварительный ключ',
                endpoint: 'Адрес:Порт VPN-сервера',
                dns: 'DNS',
                allowedips: 'Разрешенные IP (разделить запятой)',
                persistentKeepAlive: 'Постоянный Keep Alive (сек)',
                preUp: 'PreUp',
                postUp: 'PostUp',
                PreDown: 'PreDown',
                PostDown: 'PostDown',
              },
              helpers: {
                advancedOptions:
                  'Нажмите на раздел "Дополнительные настройки", чтобы открыть дополнительные настройки для точной настройки конфигурации вашего туннеля WireGuard. Вы можете настраивать предварительные и пост-скрипты, среди других параметров.',
                name: 'Уникальное имя для вашего туннеля WireGuard для его легкой идентификации.',
                pubkey:
                  'Публичный ключ, связанный с туннелем WireGuard для безопасной связи.',
                prvkey:
                  'Закрытый ключ, связанный с туннелем WireGuard для безопасной связи.',
                address:
                  'IP-адрес, назначенный этому клиенту WireGuard в рамках VPN-сети.',
                serverPubkey:
                  'Публичный ключ сервера WireGuard для безопасной связи.',
                presharedKey: 'Необязательный симметричный секретный ключ для повышения безопасности.',
                allowedIps:
                  'Список IP-адресов или диапазонов CIDR, разделенных запятыми, которым разрешена связь через туннель.',
                endpoint:
                  'Адрес и порт сервера WireGuard, обычно в формате "hostname:port".',
                dns: 'DNS-сервер, который должен использоваться туннелем WireGuard для разрешения имен. В настоящее время мы поддерживаем только IP-адрес DNS-сервера, в будущем мы поддержим поиск доменов.',
                persistentKeepAlive:
                  'Интервал (в секундах) для отправки периодических сообщений Keep-Alive, чтобы гарантировать активность туннеля. Подстройте по мере необходимости.',
                routeAllTraffic:
                  'Если включено, весь сетевой трафик будет направляться через туннель WireGuard.',
                preUp:
                  'Команды оболочки или скрипты, которые будут выполнены перед установкой туннеля WireGuard.',
                postUp:
                  'Команды оболочки или скрипты, которые будут выполнены после установки туннеля WireGuard.',
                preDown:
                  'Команды оболочки или скрипты, которые будут выполнены перед разрывом соединения с туннелем WireGuard.',
                postDown:
                  'Команды оболочки или скрипты, которые будут выполнены после разрыва соединения с туннелем WireGuard.',
              },
              submit: 'Добавить туннель',
              messages: {
                configError: 'Ошибка при разборе файла конфигурации',
                addSuccess: 'Туннель добавлен',
                addError: 'Ошибка создания туннеля',
              },
              controls: {
                importConfig: 'Импортировать файл конфигурации',
                generatePrvkey: 'Сгенерировать закрытый ключ',
              },
            },
          },
          guide: {
            title: 'Добавление туннеля WireGuard',
            subTitle: `<p>Для установки безопасного соединения между двумя или более устройствами через интернет создайте виртуальную частную сеть, настроив ваш туннель.</p><p>Если вы не видите опций, таких как Таблица или MTU, это означает, что мы в настоящее время не поддерживаем их, но они будут добавлены позже.</p>`,
            card: {
              title: 'Настройка нового туннеля:',
              content: `
                <p>1. Импорт файла конфигурации</p>
                <div>
                <ul>
                  <li>Нажмите кнопку "Импортировать файл конфигурации".</li>
                  <li>Перейдите к файлу конфигурации, используя диалоговое окно выбора файла.</li>
                  <li>Выберите .conf файл, который вы получили или создали.</li>
                </ul>
                </div>
                <p>2. Или заполните форму слева</p>
                <div>
                <ul>
                  <li>Введите имя для туннеля.</li>
                  <li>Укажите основные данные, такие как закрытый ключ, открытый ключ и конечную точку (адрес сервера).</li>
                </ul>
                </div>
                <p>Для получения дополнительной помощи, пожалуйста, посетите справку defguard (https://defguard.gitbook.io/)</p>
              `,
            },
          },
        },
        addInstancePage: {
          title: 'Добавить экземпляр',
          forms: {
            initInstance: {
              title: 'Пожалуйста, укажите URL и токен экземпляра',
              labels: {
                url: 'URL экземпляра',
                token: 'Токен',
              },
              submit: 'Добавить экземпляр',
            },
            device: {
              title: 'Дайте имя этому устройству',
              labels: {
                name: 'Имя',
              },
              submit: 'Завершить',
              messages: {
                addSuccess: 'Устройство добавлено',
              },
            },
          },
          guide: {
            title: 'Добавление экземпляров и подключение к VPN-локациям',
            subTitle:
              'Чтобы активировать это устройство и получить доступ ко всем VPN-локациям, вы должны предоставить URL вашего экземпляра defguard и ввести токен активации.',
            card: {
              title: 'Вы можете получить токен, выполнив следующее',
              content: `
                <p>1. Активация удаленного рабочего стола самостоятельно</p>
                <div>
                <p>
                Если у вас есть доступ к вашему экземпляру defguard (вы находитесь дома/в офисе, где доступен defguard), перейдите в defguard -> ваш профиль -> "Добавить устройство" и выберите: Активировать клиент Defguard. Затем выберите, хотите ли вы, чтобы токен был отправлен вам по электронной почте, или просто скопируйте его из defguard.
                </p>
                </div>
                <p>2. Удаленная активация администратором</p>
                <div>
                <p>
                Если у вас нет доступа к defguard - обратитесь к вашему администратору (в вашем сообщении/электронной почте по вступлению были указаны контактные данные администратора) и запросите активацию удаленного рабочего стола - лучше всего попросить отправить вам активационное письмо, из которого вы можете скопировать URL и токен экземпляра.
                </p>
                </div>
                <p>
                Для получения дополнительной помощи, пожалуйста, посетите справку defguard (https://defguard.gitbook.io/)
                </p>
              `,
            },
          },
        },
      },
      sideBar: {
        instances: 'Экземпляры defguard',
        addInstance: 'Добавить экземпляр',
        addTunnel: 'Добавить туннель',
        tunnels: 'Туннели WireGuard',
        settings: 'Настройки',
        copyright: {
          copyright: `Авторские права © 2024`,
          appVersion: 'Версия приложения: {version:string}',
        },
        applicationVersion: 'Версия приложения: ',
      },
      newApplicationVersion: {
        header: 'Доступна новая версия',
        dismiss: 'Отмена',
        releaseNotes: 'Смотреть, что нового',
      },
    },
    enrollment: {
      sideBar: {
        title: 'Регистрация',
        steps: {
          welcome: 'Добро пожаловать',
          verification: 'Проверка данных',
          password: 'Создание пароля',
          vpn: 'Настройка VPN',
          finish: 'Готово',
        },
        appVersion: 'Версия приложения',
      },
      stepsIndicator: {
        step: 'Шаг',
        of: 'из',
      },
      timeLeft: 'Оставшееся время',
      steps: {
        welcome: {
          title: 'Привет, {name: string}',
          explanation: `
Для доступа к корпоративной инфраструктуре требуется завершить процесс регистрации. Во время этого процесса вам потребуется:

1. Проверить ваши данные
2. Создать пароль
3. Настроить VPN устройство

У вас есть лимит времени **{time: string} минут**, чтобы завершить этот процесс. Если у вас возникли вопросы, обратитесь к вашему администратору. Вся необходимая информация находится внизу боковой панели.`,
        },
        dataVerification: {
          title: 'Проверка данных',
          messageBox:
            'Пожалуйста, проверьте ваши данные. Если что-то неверно, сообщите об этом вашему администратору после завершения процесса.',
          form: {
            fields: {
              firstName: {
                label: 'Имя',
              },
              lastName: {
                label: 'Фамилия',
              },
              email: {
                label: 'E-mail',
              },
              phone: {
                label: 'Номер телефона',
              },
            },
          },
        },
        password: {
          title: 'Создание пароля',
          form: {
            fields: {
              password: {
                label: 'Создать новый пароль',
              },
              repeat: {
                label: 'Подтвердите новый пароль',
                errors: {
                  matching: `Пароли не совпадают`,
                },
              },
            },
          },
        },
        deviceSetup: {
          desktopSetup: {
            title: 'Настройте это устройство',
            controls: {
              create: 'Настроить устройство',
              success: 'Устройство настроено',
            },
            messages: {
              deviceConfigured: 'Устройство настроено',
            },
          },
          optionalMessage: `* Этот шаг НЕОБЯЗАТЕЛЕН. Вы можете пропустить его, если хотите. Это можно настроить позже в defguard.`,
          cards: {
            device: {
              title: 'Настройте ваше устройство для VPN',
              create: {
                submit: 'Создать конфигурацию',
                messageBox:
                  'Обратите внимание, что вы должны скачать конфигурацию сейчас, поскольку мы не храним ваш закрытый ключ. После закрытия этого диалогового окна вы не сможете получить полный файл конфигурации (с закрытыми ключами, только пустой шаблон).',
                form: {
                  fields: {
                    name: {
                      label: 'Имя устройства',
                    },
                    public: {
                      label: 'Мой открытый ключ',
                    },
                    toggle: {
                      generate: 'Сгенерировать пару ключей',
                      own: 'Использовать мой собственный открытый ключ',
                    },
                  },
                },
              },
              config: {
                messageBox: {
                  auto: `
        <p>
          Обратите внимание, что вы должны скачать конфигурацию сейчас,
          поскольку <strong>мы не</strong> храним ваш закрытый ключ. После
          закрытия этого диалогового окна вы <strong>не сможете</strong>
          получить полный файл конфигурации (с закрытыми ключами, только пустой
          шаблон).
        </p>
`,
                  manual: `
        <p>
          Пожалуйста, обратите внимание, что конфигурация, предоставленная здесь,
          <strong>не включает закрытый ключ и использует открытый ключ для заполнения его места</strong>, вам
          нужно будет заменить его самостоятельно, чтобы конфигурация работала правильно.
        </p>
`,
                },
                deviceNameLabel: 'Название моего устройства',
                cardTitle:
                  'Используйте предоставленный файл конфигурации, отсканировав QR-код или импортировав его как файл в приложение WireGuard на ваших устройствах.',
                card: {
                  selectLabel: 'Файл конфигурации для местоположения',
                },
              },
            },
            guide: {
              title: 'Краткое руководство',
              messageBox: 'Это краткое руководство поможет вам с настройкой устройства.',
              step: 'Шаг {step: number}:',
              steps: {
                wireguard: {
                  content:
                    'Скачайте и установите клиент WireGuard на ваш компьютер или приложение на телефоне.',
                  button: 'Скачать WireGuard',
                },
                downloadConfig: 'Скачайте предоставленный файл конфигурации на ваше устройство.',
                addTunnel: `Откройте WireGuard и выберите "Добавить туннель" (Импортировать туннель(и) из файла).
Найдите ваш файл конфигурации Defguard и нажмите "ОК". На телефоне используйте иконку «+» в приложении WireGuard и отсканируйте QR-код.`,
                activate: 'Выберите свой туннель из списка и нажммите "Активировать".',
                finish: `
Отличная работа - ваш Defguard VPN теперь активирован!

Если вы хотите отключить соединение с VPN, просто нажмите "деактивировать".
`,
              },
            },
          },
        },
        finish: {
          title: 'Конфигурация завершена!',
        },
      },
    },
    sessionTimeout: {
      card: {
        header: 'Время сеанса истекло',
        message:
          'Извините, вы превысили временное ограничение для завершения процесса. Пожалуйста, попробуйте еще раз. Если вам нужна помощь, пожалуйста, посмотрите наше руководство или свяжитесь с вашим администратором.',
      },
      controls: {
        back: 'Введите новый токен',
        contact: 'Связаться с администратором',
      },
    },
    token: {
      card: {
        title: 'Пожалуйста, введите ваш персональный токен регистрации',
        messageBox: {
          email: 'Вы можете найти токен в письме или использовать прямую ссылку.',
        },
        form: {
          errors: {
            token: {
              required: 'Токен обязателен',
            },
          },
          fields: {
            token: {
              placeholder: 'Токен',
            },
          },
          controls: {
            submit: 'Далее',
          },
        },
      },
    },
  },
  modals: {
    updateInstance: {
      title: 'Обновить экземпляр',
      infoMessage:
        "Введите токен, отправленный администратором, чтобы обновить конфигурацию экземпляра.\nПо желанию, вы можете удалить этот экземпляр полностью, нажав кнопку 'Удалить экземпляр' ниже.",
      form: {
        fieldLabels: {
          token: 'Токен',
          url: 'URL',
        },
        fieldErrors: {
          token: {
            rejected: 'Токен или URL отклонены.',
            instanceIsNotPresent: 'Экземпляр для этого токена не найден.',
          },
        },
      },
      controls: {
        updateInstance: 'Обновить экземпляр',
        removeInstance: 'Удалить экземпляр',
      },
      messages: {
        success: '{name: string} обновлен.',
        error: 'Токен или URL недействительны.',
        errorInstanceNotFound: 'Экземпляр для указанного токена не зарегистрирован!',
      },
    },
    deleteInstance: {
      title: 'Удалить экземпляр',
      subtitle: 'Вы уверены, что хотите удалить {name: string}?',
      messages: {
        success: 'Экземпляр удален',
        error: 'Произошла непредвиденная ошибка',
      },
      controls: {
        submit: 'Удалить экземпляр',
      },
    },
    deleteTunnel: {
      title: 'Удалить туннель',
      subtitle: 'Вы уверены, что хотите удалить {name: string}?',
      messages: {
        success: 'Туннель удален',
        error: 'Произошла непредвиденная ошибка',
      },
      controls: {
        submit: 'Удалить туннель',
      },
    },
    mfa: {
      authentication: {
        title: 'Двухфакторная аутентификация',
        authenticatorAppDescription:
          'Вставьте код аутентификации из вашего приложения аутентификации.',
        emailCodeDescription:
          'Вставьте код аутентификации, отправленный на ваш адрес электронной почты.',
        mfaStartDescriptionPrimary:
          'Для этого подключения обязательна двухфакторная аутентификация (2FA).',
        mfaStartDescriptionSecondary: 'Выберите предпочтительный метод аутентификации.',
        useAuthenticatorApp: 'Использовать приложение аутентификации',
        useEmailCode: 'Использовать код из электронной почты',
        saveAuthenticationMethodForFutureLogins: 'Использовать этот метод для будущих входов',
        buttonSubmit: 'Подтвердить',
        errors: {
          mfaNotConfigured: 'Выбранный метод не настроен.',
          mfaStartGeneric:
            'Не удалось запустить процесс двухфакторной аутентификации (2FA). Пожалуйста, попробуйте еще раз или свяжитесь с администратором.',
          instanceNotFound: 'Не удалось найти экземпляр.',
          locationNotSpecified: 'Местоположение не указано.',
          invalidCode:
            'Ошибка, этот код недействителен. Попробуйте еще раз или свяжитесь с вашим администратором.',
          tokenExpired: 'Токен истек. Пожалуйста, попробуйте подключиться снова.',
        },
      },
    },
  },
} satisfies BaseTranslation;

export default ru;
