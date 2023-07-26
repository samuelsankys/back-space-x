# Fullstack Challenge 🏅 Space X API

Este é um desafio para desenvolver uma API RestFul para listar informações da API SpaceX-API.

[Vídeo de apresentação do projeto](https://www.loom.com/share/df0cbba02330454591ad30bb5bc702aa?sid=c5457e16-145b-4bff-9f2b-f008c0bd938b)

### 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/docs)
- [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Docker](https://docs.docker.com/)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/) e [Docker](https://docs.docker.com/) (caso queira iniciar com o docker).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

Será necessário clonar o projeto para sua máquina local,rodando.

```bash
git clone https://github.com/samuelsankys/back-space-x.git``
```

### 🎲 Rodando o Back End (servidor)

Variáveis de Ambiente
Antes de iniciar, você precisará realizar duas cópias do arquivo `.env.example` e renomeá-lo para `.env` e .`env.development`. Nesses arquivos estarão as variáveis de ambientes do modo de desenvolvimento e de produção. No arquivo `.env.example` tem as informações para rodar o projeto localmente.

Já para rodar com docker-compose, será necessário alterar no `.env` de `localhost:5432` para `postgres:5432` o dado de DATABASE_URL.

#### Rodando localmente

- Instale as dependências com

```bash
  npm install
```

- Certifique que o Postgres está funcionando e rode.

```bash
 npm run migrate
```

Isso irá construir as tabelas necessárias para rodar nosso projeto.

- Por fim, inicialize o servidor com

```bash
 npm run dev
```

para o modo de desenvolvimento.

#### Rodando com docker-compose

Antes de inicializar certifiquesse de parar algum container que contenha o postgres rodando. Após isso, para inicializar o servidor e banco de dados rode:

```bash
docker-compose up --build
```

### Documentação

A documentação das rotas poderá ser visualizada após inicializado o servidor no endpoint `http://localhost:3563/api-docs/`.

### 🎲 Features

- [x] Desenvolver rotas
  - <summary>[GET] /</summary>
  - <summary>[GET] /launches</summary>
  - <summary>[GET] /launches/stats</summary>
- [x] Alimentar o banco de dados com um script que armazena os dados dos lançamentos da SpaceX API.
- [x] Desenvolver um CRON para ser executado diariamente às 9h e armazenar os novos lançamentos.
- [x] Descrever a documentação da API utilizando o conceito de Open API 3.0;
- [x] Configurar Docker no Projeto.
- [x] Configurar um sistema de alerta se houver alguma falha durante a sincronização dos lançamentos;
- [x] Escrever Unit Tests para os endpoints da API;

#### Organização:

- Aplicação de padrões Clean Code.
- Funções desacopladas.
- Validação de chamadas assíncronas para evitar travamentos.
- Commits seguindo o padrão de [convensão](https://www.conventionalcommits.org/en/v1.0.0/).
- Fluxo de git utilizando boas práticas auxiliado pelo gitflow.
- Eslint.

## Processo de investigação

- Preparar ambiente de desenvolvimento, configurando o servidor, eslint, prettier e orm.
- Entender a documentação e começar a testar requisições para os endpoints e suas respostas da API.
- Planejar como poderia ser organizado os dados enviado da API.
- Criar função de carregamento da API para o banco de dados.
- Modificar os modelos de acordo com os dados enviados pelas api(Datatype, null, etc)
- Criar uma função de carregamento de dados assim que o servidor fosse iniciado. (Desta forma ao baixarem meu projeto e colocar para rodar ele já estaria com os dados).
- Criar os Jobs fazendo uma verificação de um novo dado que se chama sequence. (Auxilia na sequencia de inserção e quantidade de dados). Para inserir faço uma verificação de quantos dados tem a mais, verifico se o identificador existe e se não existir insiro somente os valores adicionais.
- Criar rotas com os dados no banco. Após alguns testes senti a necessidade de voltar nos modelos de dados para inserir uma nova tabela.
- Documentar as rotas
- Criar arquivo Docker
- Realizar os testes com Jest
- Criar sistema de notificação utilizando o discord para notificar se houve algum erro ao realizar os jobs.

> This is a challenge by [Coodesh](https://coodesh.com/)
