import { Router } from "jsr:@oak/oak/router";
import APIRouter  from "./APIs.ts";
import {handle} from "../UIResources/dist/server/entry.mjs"
import {serveFile} from "https://deno.land/std/http/file_server.ts";
import { dbConnect } from "../UtilFunc/Database.ts";
import AuthRoute from "./Auth.ts";
const astroPort = 8085;
const mainPortalRouter = new Router();
dbConnect();
mainPortalRouter.use("/auth", AuthRoute.routes());
mainPortalRouter.use("/api", APIRouter.routes());
mainPortalRouter.get("/assets/:path",async (ctx) => {
  try {
    await ctx.send({ root: `${Deno.cwd()}/Applications/MainPortal/UIResources/dist/client/` });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "File not found";
  }
});
mainPortalRouter.get("/(.*)", async(ctx)=>{
  const path = ctx.request.url.pathname;
  
  const queryString = ctx.request.url.search; // Includes '?' automatically
  const astroUrl = `http://localhost:${astroPort}${path}${queryString}`;
  
  // Fetch the response from Astro SSR
  const response = await fetch(astroUrl, {
    method: "GET",
    headers: ctx.request.headers,
  });
  
  // Set the response status and headers
  ctx.response.status = response.status;
  response.headers.forEach((value, key) => ctx.response.headers.set(key, value));
  
  // Return the response body
  ctx.response.body = response.body;
});
mainPortalRouter.use(APIRouter.allowedMethods());
mainPortalRouter.use(handle);

export { mainPortalRouter };
