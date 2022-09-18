import { authorsLoader } from './dalataloader/authorsLoader';
import { categoriesLoader } from './dalataloader/categoriesLoader';
import { MyContext } from './types';
import 'reflect-metadata';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectRedis from 'connect-redis';
import session from 'express-session';
import { createConnection } from 'typeorm';
import { redis } from './redis';
import { ApolloServer } from 'apollo-server-express';
import { COOKIE_NAME, PORT, __prod__ } from './constants';
import { buildSchema } from 'type-graphql';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

dotenv.config();

const main = async () => {
  await createConnection();
  console.log('Database Connected');
  const app = express();
  const RedisStore = connectRedis(session);

  // app.use(morgan('tiny'));

  app.use(
    session({
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      name: COOKIE_NAME,
      secret: process.env.SESSION_SECRET as string,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: __prod__,
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    })
  );

  const schema = await buildSchema({
    resolvers: [__dirname + '/module/**/*.resolver.{ts,js}'],
    validate: true,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => ({
      req,
      redis,
      res,
      categoriesLoader: categoriesLoader(),
      authorsLoader: authorsLoader(),
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
};

main().catch((err) => console.log('Main Server error : ', err));
