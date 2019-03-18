import * as KoaRouter from "koa-router";

import { auth } from "./middleware";

import loginUser from "../auth/api/loginUser";
import createUser from "../users/api/createUser";
import retrieveUser from "../users/api/retrieveUser";

const router = new KoaRouter();

// Healthcheck
router.get("/", ctx => {
  ctx.body = "Hello, world.";
});

router.get("/healthcheck", ctx => {
  ctx.status = 200;
});

// Auth
router.post("/login", loginUser);

// Users
router.post("/users", createUser);
router.get("/users/:id", auth, retrieveUser);

export default router;
