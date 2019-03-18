import * as KoaRouter from "koa-router";

import createUser from "../users/api/createUser";
import retrieveUser from "../users/api/retrieveUser";

const router = new KoaRouter();

router.get("/", ctx => {
  ctx.body = "Hello, world.";
});

router.get("/healthcheck", ctx => {
  ctx.status = 200;
});

// Users
router.post("/users", createUser);
router.get("/users/:id", retrieveUser);

export default router;
