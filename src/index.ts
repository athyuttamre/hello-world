import * as Koa from "koa";
import "reflect-metadata";
import { createConnection } from "typeorm";

import middleware from "./api/middleware";
import router from "./api/router";

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

// Connect to database
createConnection(dbConfig)
  .then(() => {
    // Run server
    app.listen(process.env.PORT || 3000);
  })
  .catch((e: Error) => {
    console.error(e);
  });
