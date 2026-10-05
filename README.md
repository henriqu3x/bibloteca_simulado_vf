
# Saber+ Biblioteca

Sistema para gerenciamento interno de uma biblioteca
## Tecnologias utilizadas

- Node
- Express
- prisma
- postgres
- swagger
- bcrypt
- jsonwebtoken
- cors

## Variaveis de ambiente

Para executar esse projeto você precisa adicionar as seguintes variaveis no arquivo .env

`DATABASE_URL: Url do banco de dados`

`JWT_SECRET: Senha para criação e verificação do token`

## Como rodar o projeto

Clone o projeto

```bash
  git clone https://github.com/henriqu3x/bibloteca_simulado_vf
```

Va para o diretorio do projeto

```bash
  cd biblioteca
```

Instale as dependencias

```bash
  npm install
```
Gere o prisma client

```bash
  npx prisma generate
```

Inicie o servidor

```bash
  npm run dev
```

## Arquitetura de pastas

```bash
  /prisma
  /src
    /database
    /middlewares
    /repositories
    /services
    /controllers
    /routes
    /errors
    /models
```
    
## API swagger

#### EndPoint para acessar a documentação

```http
  GET /api/v1/api-docs
```

## Perfis de acesso

```bash
  Cliente
```
```bash
  Admin
```

## Perfis de acesso

| Perfil    | Permissões nessa etapa|
| :-------- | :-------              | 
| `Admin`   | `Acesso a todas as funcionalidades do sistema`              |
| `Atendente`   | `Visualização de algumas rotas e Criação de emprestimos e devoluções`              |



