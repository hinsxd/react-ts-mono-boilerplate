require('dotenv-safe').config();
import 'reflect-metadata';
import * as typeorm from 'typeorm';
// typeorm.useContainer(Container);

async function bootstrap() {
  const conn = await typeorm.createConnection();
  await conn.synchronize();
  // build TypeGraphQL executable schema
}

bootstrap();
