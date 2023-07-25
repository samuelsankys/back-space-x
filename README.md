# Fullstack Challenge 🏅 Space X API

Este é um desafio para desenvolver uma API RestFul para listar informações da API SpaceX-API.

### 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/docs)
- [Docker](https://docs.docker.com/)
- [Swagger](https://swagger.io/)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

lorem

### Features

- [x] Desenvolver rotas
  - <summary>[GET] /</summary>
  - <summary>[GET] /launches</summary>
  - <summary>[GET] /launches/stats</summary>
- [x] Alimentar o banco de dados com um script que armazena os dados dos lançamentos da SpaceX API.
- [x] Desenvolver um CRON para ser executado diariamente às 9h e armazenar os novos lançamentos.
- [x] Descrever a documentação da API utilizando o conceito de Open API 3.0;
- [ ] Configurar Docker no Projeto.
- [ ] Configurar um sistema de alerta se houver alguma falha durante a sincronização dos lançamentos;
- [ ] Escrever Unit Tests para os endpoints da API;

#### Organização:

- Aplicação de padrões Clean Code
- Validação de chamadas assíncronas para evitar travamentos

### INSTRUÇÕES

**Obrigatório 1** - Você deverá desenvolver as seguintes rotas:

Além disso, os endpoints devem utilizar os seguintes códigos de status:

- 200: sucesso com body ou sem body
- 204: sucesso sem body
- 400: mensagem de erro em formato humanizado, ou seja, sem informações internas e códigos de erro:

```json
{
  "message": "Error message"
}
```

## Processo de investigação

> This is a challenge by [Coodesh](https://coodesh.com/)
