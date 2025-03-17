import { Router } from "jsr:@oak/oak/router";
import { register } from "../APIs/RegisterAccount.js";
const APIRouter = new Router();
APIRouter.post("/register", async (ctx) => {
  await register(ctx);
});
APIRouter.get("/getUserPreferences",async(ctx)=>{
  const header = ctx.header
  if(header.secrets==="12345"){
    ctx.response.body({darkmode:true})
  }
})
export { APIRouter };
