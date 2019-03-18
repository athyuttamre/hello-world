import { Context, Middleware } from "koa";
import * as bodyParser from "koa-bodyparser";
import * as jwt from "koa-jwt";

// Auth
const jwtSecret = process.env.JWT_SHARED_SECRET;
if (!jwtSecret) {
  throw new Error("Missing JWT secret.");
}
export const auth = jwt({
  secret: jwtSecret
});

// Default middleware
const defaultMiddleware = [bodyParser()];

export default defaultMiddleware;
