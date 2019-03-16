import * as Koa from "koa";

import router from "./api/router";

// Init app
const app = new Koa();

// Setup router
app.use(router.routes());

// TODO: connect to database

// Run server
app.listen(3000);
