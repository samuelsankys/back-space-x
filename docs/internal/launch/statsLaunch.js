module.exports = {
  get: {
    tags: ['Lançamentos'],
    summary: 'Estatísticas de lançamentos por ano.',
    description: 'Estatísticas de informações sobre quantos foguetes foram lançados por ano.',
    operationId: 'stats-launch',
    security: [{ token: [] }],
    responses: {
      200: {
        description: 'SUCESSO. A requisição foi atendida e resultou em resposta.',
        content: {
          'application/json': {
            schema: {
              title: 'response stats-launch',
              type: 'object',
              properties: {
                years: {
                  type: 'array',
                  description: 'Anos de lançamento.',
                  items: {
                    example: ['2006', '2007', '2009', '2010', '2011', '2012'],
                    type: 'integer',
                  },
                },
                series: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/resStatsLaunch',
                  },
                },
              },
            },
          },
        },
      },
      500: { $ref: '#/errors/serverError' },
    },
  },
}
