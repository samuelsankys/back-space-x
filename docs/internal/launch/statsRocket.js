module.exports = {
  get: {
    tags: ['Lançamentos'],
    summary: 'Estatísticas de foguetes lançados.',
    description: 'Estatísticas de informações sobre os foguetes lançados.',
    operationId: 'stats-rocket',
    responses: {
      200: {
        description: 'SUCESSO. A requisição foi atendida e resultou em resposta.',
        content: {
          'application/json': {
            schema: {
              title: 'response stats-rocket',
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                },
                failed: {
                  type: 'boolean',
                },
                launches: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/resStatsRocket',
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
