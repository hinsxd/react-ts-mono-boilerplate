require('dotenv-safe').config();
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import * as typeorm from 'typeorm';
import { ApolloError, ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import * as cors from 'cors';
// typeorm.useContainer(Container);

typeorm.useContainer(Container);

async function bootstrap() {
  const conn = await typeorm.createConnection();
  await conn.synchronize();
  const app = express();
  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000'
    })
  );

  const schema = await buildSchema({
    resolvers: [__dirname + '/modules/**/resolver.*'],
    // register 3rd party IOC container
    container: Container,
    validate: false
  });
  // console.log(printSchema(schema));
  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({
      req
    })
  });
  server.applyMiddleware({ app, cors: false }); // app is from an existing express app
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

bootstrap();
