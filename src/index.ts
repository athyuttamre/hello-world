import * as Koa from "koa";
import { ApolloServer } from "apollo-server-koa";
import { createConnection } from "typeorm";
import "reflect-metadata";

import middleware from "./api/middleware";
import router from "./api/router";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schemas";

import dbConfig from "./ormconfig";

// Init app
const app = new Koa();

// Handle errors
app.on("error", (err, ctx) => {
  console.error(err, ctx);
});

// Setup middleware
middleware.forEach(mw => {
  app.use(mw);
});

// Setup router
app.use(router.routes());

// Init GraphQL server
const gqlServer = new ApolloServer({ resolvers, typeDefs });
gqlServer.applyMiddleware({ app });

// Connect to database
createConnection(dbConfig)
  .then(() => {
    // Run server
    const port = parseInt(process.env.PORT || "3000");
    app.listen(port);
  })
  .catch((e: Error) => {
    console.error(e);
  });
