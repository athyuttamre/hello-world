import * as KoaRouter from "koa-router";

const router = new KoaRouter();

router.get("/", ctx => {
  ctx.body = "Hello, world.";
});

export default router;
