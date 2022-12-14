# Blogs-api

<details> 
<summary>:brazil: Versão em Português</summary>

## Objetivo

Construir uma API para gerenciar o banco de dados de um blog incluindo:

- autenticação de usuário no login com JWT;
- CRUD de usuários, postagens e categorias;
- gerenciamento do banco de dados com o ORM Sequelize;

## Desafios
- Aprender e me acostumar com a cli do Sequelize e configuração das migrations e models;
- Aprender e usar mecanismos e ferramentas importantes que fazem parte de aplicações backend como autenticação (JWT) e validações com Joi;
- Arquitetar a aplicação, criando rotas e middlewares, tendo em vista sua escalabilidade;

## Observações

Essa aplicação não usa recursos armazenáveis em cache, então ainda não é uma api do tipo RESTful. <br />
<br />

## Executando a aplicação localmente

- Para instalar os containers docker:

```
docker-compose up -d
```

- Executar o terminal do container:

```
docker attach blogs_api
```

- Instalar as dependências, criar e popular o banco de dados:

```
npm install && npm run prestart && npm run seed
```

- Inicializar a aplicação:

```
npm start
```

<br />

## Endpoints

### Login

| Requisição | URL                         |
| ---------- | --------------------------- |
| `POST`     | http://localhost:3000/login |

### User

| Requisição | URL                            |
| ---------- | ------------------------------ |
| `GET`      | http://localhost:3000/user     |
| `GET`      | http://localhost:3000/user/:id |
| `POST`     | http://localhost:3000/user     |
| `DELETE`   | http://localhost:3000/user/:id |

### BlogPost

| Requisição | URL                                      |
| ---------- | ---------------------------------------- |
| `GET`      | http://localhost:3000/post               |
| `GET`      | http://localhost:3000/post/:id           |
| `GET`      | http://localhost:3000/post/search?q=name |
| `PUT`      | http://localhost:3000/post/:id           |
| `POST`     | http://localhost:3000/post               |
| `DELETE`   | http://localhost:3000/post/:id           |

### Categories

| Requisição | URL                              |
| ---------- | -------------------------------- |
| `GET`      | http://localhost:3000/categories |
| `POST`     | http://localhost:3000/categories |

<br />


</details>

<details open> 
<summary>:us: English Version</summary>

## Objective

To build an API to manage the database of a blog including:

- user's authentication on login with JWT;
- user, post, categories CRUD;
- the management of the database with ORM Sequelize;
  
  <br />

## Challenges
- Learn and get used to Sequelize's cli and configuration of its migrations and models;
- Learn and use important mechanisms and tools part of backend applications like authentication (JWT) and validations with Joi;
- Architecture the application, with routes and middlewares, aiming its scalability

## Observations

This application doesn't use cacheable resources, so it's not a RESTful app. <br />
 <br />

## Running the application locally

- To install the docker containers:

```
docker-compose up -d
```

- Run the container terminal:

```
docker attach blogs_api
```

- Install dependencies, create and populate the database:

```
npm install && npm run prestart && npm run seed
```

- Start the application:

```
npm start
```

<br />

## Endpoints

### Login

| Request | URL                         |
| ---------- | --------------------------- |
| `POST`     | http://localhost:3000/login |

### User

| Request | URL                            |
| ---------- | ------------------------------ |
| `GET`      | http://localhost:3000/user     |
| `GET`      | http://localhost:3000/user/:id |
| `POST`     | http://localhost:3000/user     |
| `DELETE`   | http://localhost:3000/user/:id |

### BlogPost

| Request | URL                                      |
| ---------- | ---------------------------------------- |
| `GET`      | http://localhost:3000/post               |
| `GET`      | http://localhost:3000/post/:id           |
| `GET`      | http://localhost:3000/post/search?q=name |
| `PUT`      | http://localhost:3000/post/:id           |
| `POST`     | http://localhost:3000/post               |
| `DELETE`   | http://localhost:3000/post/:id           |

### Categories

| Request | URL                              |
| ---------- | -------------------------------- |
| `GET`      | http://localhost:3000/categories |
| `POST`     | http://localhost:3000/categories |

<br />

</details>
