import { Router } from "jsr:@oak/oak/router";
import { APIRouter } from "./APIs.js";

const mainPortalRouter = new Router();
mainPortalRouter.get("/", (ctx) => {
  ctx.response.body = "Hello, world!";
  ctx.response.headers.set("Content-Type", "text/json");
});
mainPortalRouter.use("/api", APIRouter.routes());
export { mainPortalRouter };
