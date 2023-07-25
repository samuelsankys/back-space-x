const launch = require('./launch')

module.exports = {
  '/': {
    get: {
      summary: 'Mostra título do projeto.',
      description: 'Responsável por mostrar título do projeto.',
      operationId: '',
      responses: {
        200: {
          description: 'SUCESSO. A requisição foi atendida e resultou em resposta.',
          content: {
            'application/json': {
              schema: {
                title: 'response index',
                $ref: '#/components/schemas/resIndex',
              },
            },
          },
        },
        500: { $ref: '#/errors/serverError' },
      },
    },
  },
  ...launch,
}
