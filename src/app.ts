import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { schema } from "./schema";
(() => {
  const port = 3000;
  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  server.listen(port, () => console.log("Server is running..."));
})();
