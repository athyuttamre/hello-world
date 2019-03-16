import * as KoaRouter from "koa-router";

const router = new KoaRouter();

router.get("/", ctx => {
  ctx.body = "Hello, world.";
});

router.get("/healthcheck", ctx => {
  ctx.status = 200;
});

export default router;
