# A fullstack boilerplate with Yarn workspaces, Lerna, React, TypeORM, Type-GraphQL, Apollo, Postgres.

## Usage

### 0. Install Docker for your platform.

https://docs.docker.com/install/

Make sure Docker is running.

### 1. Clone the repo and install dependencies

```bash
$ git clone https://github.com/hinsxd/react-ts-mono-boilerplate.git --depth=1 myProject
$ cd myProject
$ rm -rf .git && git init
$ yarn
```

### 2. Start Postgres database with docker-compose, then start backend server

```bash
# New terminal window
$ cd packages/server
$ docker-compose up -d # -d means run in background

# start server at http://localhost:4000/graphql
$ yarn start
```

### 3. Start React dev server

```bash
$ cd packages/web
$ yarn start
```
