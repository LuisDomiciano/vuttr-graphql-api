import Router from "@koa/router";
import { Next } from "koa";
import { Context } from "vm";

const router = new Router();

router.get("/hello", (ctx: Context, next: Next) => {
  ctx.body = "Viva Brasil!";
  return next();
});

export { router };
