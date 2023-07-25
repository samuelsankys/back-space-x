module.exports = {
  resStatsRocket: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Nome do foguete',
        example: 'Rocket Repellent',
      },
      success: {
        type: 'integer',
        description: 'Quantidade de lançamentos de sucesso.',
        example: '10',
      },
      failed: {
        type: 'integer',
        description: 'Quantidade de lançamentos de falha.',
        example: '2',
      },
      total: {
        type: 'integer',
        description: 'Somas de todos os lançamentos.',
        example: '12',
      },
    },
  },

  resStatsLaunch: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Nome do foguete',
      },
      data: {
        type: 'array',
        description: 'quantidade de lançamentos organizados por anos',
        items: {
          type: 'integer',
          example: ['5', '3', '10', '4', '1', '20'],
        },
      },
    },
  },

  resIndexLaunch: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID do lançamento.',
      },
      upcoming: {
        type: 'boolean',
        description: 'Indica se é um lançamento futuro.',
      },
      date_precision: {
        type: 'string',
        description: 'Precisão da data do lançamento.',
      },
      date_local: {
        type: 'string',
        format: 'date-time',
        description: 'Data local do lançamento no formato ISO 8601.',
      },
      date_unix: {
        type: 'integer',
        description: 'Data do lançamento em formato Unix timestamp.',
      },
      date_utc: {
        type: 'string',
        format: 'date-time',
        description: 'Data UTC do lançamento no formato ISO 8601.',
      },
      sequence: {
        type: 'integer',
        description: 'Sequência do lançamento.',
      },
      name: {
        type: 'string',
        description: 'Nome da missão.',
      },
      flight_number: {
        type: 'integer',
        description: 'Número do voo do lançamento.',
      },
      auto_update: {
        type: 'boolean',
        description: 'Indica se a atualização automática está ativada.',
      },
      launchpad: {
        type: 'string',
        description: 'ID do local de lançamento.',
      },
      details: {
        type: 'string',
        description: 'Detalhes do lançamento.',
      },
      success: {
        type: 'boolean',
        description: 'Indica se o lançamento foi bem-sucedido.',
      },
      rocket_id: {
        type: 'string',
        description: 'ID do foguete utilizado no lançamento.',
      },
      window: {
        type: 'integer',
        description: 'Janela de lançamento.',
      },
      net: {
        type: 'boolean',
        description: 'Indica se o lançamento foi feito na janela de tempo esperada.',
      },
      tbd: {
        type: 'boolean',
        description: 'Indica se a data de lançamento ainda não foi determinada.',
      },
      static_fire_date_unix: {
        type: 'integer',
        description: 'Data do teste estático em formato Unix timestamp.',
      },
      static_fire_date_utc: {
        type: 'string',
        format: 'date-time',
        description: 'Data UTC do teste estático no formato ISO 8601.',
      },
      fairings_reused: {
        type: 'boolean',
        description: 'Indica se as carenagens foram reutilizadas.',
      },
      fairings_recovery_attempt: {
        type: 'boolean',
        description: 'Indica se houve uma tentativa de recuperação das carenagens.',
      },
      fairings_recovered: {
        type: 'boolean',
        description: 'Indica se as carenagens foram recuperadas.',
      },
      fairings_ships: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'Array de IDs de navios associados às carenagens.',
      },
      payloads: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'Array de IDs de cargas úteis.',
      },
      capsules: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'Array de IDs de cápsulas.',
      },
      ships: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'Array de IDs de navios.',
      },
      crews: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'Array de IDs de tripulações.',
      },
      failures: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Failure',
        },
        description: 'Array de objetos de falhas.',
      },
      cores: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Core',
        },
        description: 'Array de objetos de cores.',
      },
      links: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          launch_id: {
            type: 'string',
          },
          patch_small: {
            type: 'string',
          },
          patch_large: {
            type: 'string',
          },
          reddit_campaign: {
            type: 'string',
          },
          reddit_launch: {
            type: 'string',
          },
          reddit_media: {
            type: 'string',
          },
          reddit_recovery: {
            type: 'string',
          },
          presskit: {
            type: 'string',
          },
          webcast: {
            type: 'string',
          },
          youtube_id: {
            type: 'string',
          },
          article: {
            type: 'string',
          },
          wikipedia: {
            type: 'string',
          },
          flickr_small: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          flickr_original: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
      rockets: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
          sequence: {
            type: 'integer',
          },
          active: {
            type: 'boolean',
          },
          stages: {
            type: 'integer',
          },
          boosters: {
            type: 'integer',
          },
          cost_per_launch: {
            type: 'integer',
          },
          success_rate_pct: {
            type: 'integer',
          },
          first_flight: {
            type: 'string',
            format: 'date-time',
          },
          country: {
            type: 'string',
          },
          company: {
            type: 'string',
          },
          wikipedia: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          flickr_images: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },

  Failure: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID da falha.',
      },
      launch_id: {
        type: 'string',
        description: 'ID do lançamento associado à falha.',
      },
      time: {
        type: 'integer',
        description: 'Tempo da falha em segundos.',
      },
      altitude: {
        type: 'integer',
        description: 'Altitude da falha.',
      },
      reason: {
        type: 'string',
        description: 'Motivo da falha.',
      },
    },
  },

  Core: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID do núcleo.',
      },
      launch_id: {
        type: 'string',
        description: 'ID do lançamento associado ao núcleo.',
      },
      core: {
        type: 'string',
        description: 'ID do foguete.',
      },
      flight: {
        type: 'integer',
        description: 'Número do voo do núcleo.',
      },
      gridfins: {
        type: 'boolean',
        description: 'Indica se o núcleo possui gridfins.',
      },
      legs: {
        type: 'boolean',
        description: 'Indica se o núcleo possui pernas.',
      },
      reused: {
        type: 'boolean',
        description: 'Indica se o núcleo foi reutilizado.',
      },
      landing_attempt: {
        type: 'boolean',
        description: 'Indica se houve uma tentativa de pouso.',
      },
      landing_success: {
        type: 'boolean',
        description: 'Indica se o pouso foi bem-sucedido.',
      },
      landing_type: {
        type: 'string',
        description: 'Tipo de pouso.',
      },
      landpad: {
        type: 'string',
        description: 'ID do local de pouso.',
      },
    },
  },
}
