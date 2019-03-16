import * as Koa from "koa";
import "reflect-metadata";
import { createConnection } from "typeorm";

import router from "./api/router";
import dbConfig from "./ormconfig";

// Init app
const app = new Koa();

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
