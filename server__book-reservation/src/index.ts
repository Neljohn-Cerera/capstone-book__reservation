import { authorsLoader } from "./dalataloader/authorsLoader";
import { categoriesLoader } from "./dalataloader/categoriesLoader";
import { MyContext } from "./types";
import "reflect-metadata";
import * as dotenv from "dotenv";
// set dotenv config before express to funcion properly
dotenv.config();
import cors from "cors";
import express from "express";
import connectRedis from "connect-redis";
import session from "express-session";
import { redis } from "./redis";
import { ApolloServer } from "apollo-server-express";
import {
  COOKIE_NAME,
  ORIGIN,
  PORT,
  SESSION_SECRET,
  __prod__,
} from "./constants";
import { buildSchema } from "type-graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { dbconnect } from "./db";

const main = async () => {
  await dbconnect();
  console.log("Database Connected");
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
      secret: SESSION_SECRET,
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
    resolvers: [__dirname + "/module/**/*.resolver.{ts,js}"],
    validate: true,
  });

  const apolloServer = new ApolloServer({
    cache: "bounded",
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

  app.use(function (_, res, next) {
    res.header(
      "Access-Control-Allow-Origin",
      "https://web-book-reservation.vercel.app"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();
  });

  app.use(
    cors({
      origin: ORIGIN?.split(","),
      credentials: true,
    })
  );

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => console.log(`Running on PORT : ${PORT}`));
};

main().catch((err) => console.log("Main Server error : ", err));
