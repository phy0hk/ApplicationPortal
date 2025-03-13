import {Application} from "jsr:@oak/oak/application";
import {Router} from "jsr:@oak/oak/router";
import {mainPortalRouter} from "./Applications/MainPortal/Router/Main.js";
const router = new Router();
const app = new Application();
const port = 3000;
router.get("/", (ctx) => {
  ctx.response.body = "Hello, world!";
  ctx.response.headers.set("Content-Type", "text/html");
});
router.use("/appPortal", mainPortalRouter.routes());
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on port http://localhost:${port}`);
app.listen({ port });