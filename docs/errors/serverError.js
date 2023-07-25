module.exports = {
  serverError: {
    description: 'ERRO INTERNO. O servidor encontrou uma condição inesperada que o impediu de atender a requisição.',
    content: {
      'application/json': {
        schema: {
          properties: {
            message: {
              type: 'object',
              example: 'Mensagem de erro',
            },
          },
        },
      },
    },
  },
}
