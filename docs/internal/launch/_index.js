module.exports = {
  get: {
    tags: ['Lançamentos'],
    summary: 'Lista todas os lançamentos.',
    description: 'Responsável por listar todos os lançamento e informações básicas do foguete.',
    operationId: 'index-launch',
    security: [{ token: [] }],
    parameters: [
      {
        name: 'search',
        in: 'query',
        description: 'Busca informações de missão, resultado ou nome do foguete',
        example: 'acs',
        required: false,
        type: 'string',
      },
      {
        name: 'pageSize',
        in: 'query',
        description: 'Quantidade de itens por página.',
        example: '10',
        required: false,
        type: 'string',
      },
      {
        name: 'pageNumber',
        in: 'query',
        description: 'Número da página.',
        example: '1',
        required: false,
        type: 'string',
      },
    ],
    responses: {
      200: {
        description: 'SUCESSO. A requisição foi atendida e resultou em resposta.',
        content: {
          'application/json': {
            schema: {
              title: 'response index-launch',
              type: 'object',
              properties: {
                hasPrev: {
                  type: 'boolean',
                },
                hasNext: {
                  type: 'boolean',
                },
                totalPages: {
                  type: 'number',
                },
                page: {
                  type: 'number',
                },
                totalDocs: {
                  type: 'number',
                },
                results: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/resIndexLaunch',
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
