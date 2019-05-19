# A fullstack boilerplate with Yarn workspaces, Lerna, React, TypeORM, Type-GraphQL, Apollo, Postgres.

## Usage

### 0. Install Docker for your platform.

https://docs.docker.com/install/

Make sure Docker is running.

### 1. Clone the repo and install dependencies

```bash
$ git clone https://github.com/hinsxd/react-ts-mono-boilerplate.git --depth=1 myProject
$ cd myProject

# Initialize git for your peoject
$ rm -rf .git && git init
# Install dependencies
$ yarn
```

### 2. Start Postgres database with docker-compose, then start backend server

```bash
# New terminal window
$ cd packages/server
$ docker-compose up -d # -d means run in background

# Start server at http://localhost:4000/graphql
$ yarn start
```

### 3. Codegen (graphql-code-generator) and start React dev server

```bash
$ cd packages/web
$ yarn codegen
$ yarn start
```

### 4. Adding resolvers

All files with filename `packages/server/modules/**/resolver.*` will be automatically added to resolvers.

In this boilerplate, each entity has a folder under `modoles` so as to group up the codes. Feel free to change the structure and edit `index.ts` to suit your needs.

```typescript
const schema = await buildSchema({
  // Explicitly import resolvers or specific a path
  resolvers: [__dirname + '/modules/**/resolver.*']
  // ...
});
```

Server will then restart and new schema will be ready. Now add new queries/mutations in `packages/web/apollo/entity`, followed by `yarn codegen`. This will generate new types and hooks ready to use.
