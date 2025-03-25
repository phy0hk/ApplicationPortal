import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import { mainPortalRouter } from "./Applications/MainPortal/Router/Main.ts";

const app = new Application();
const port = 3000;

app.use(mainPortalRouter.routes());
app.use(mainPortalRouter.allowedMethods());
console.log(`Server running on port http://localhost:${port}`);
app.listen({ port });
