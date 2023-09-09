import Koa from "koa";

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "Vai Corinthians!";
  return next();
});

app.listen(3000, () => {
  console.log("App is running...");
});
