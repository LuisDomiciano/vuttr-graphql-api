import Koa from "koa";
import { router } from "./router";

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "Vai Corinthians!";
  return next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("App is running...");
});
