import { Router } from "jsr:@oak/oak/router";
import "https://deno.land/std@0.181.0/dotenv/load.ts";
import { register } from "../APIs/RegisterAccount.ts";
import { login } from "../APIs/LoginUser.ts";
import { createJWT,createPayload } from "../UtilFunc/Auth.ts";
const AuthRoute = new Router();
AuthRoute.post("/register",async (ctx)=>{
  ctx.response.body = await register(ctx)
})

AuthRoute.post("/login",async (ctx)=>{
  const checkData:any = await login(ctx)
  const header = ctx.request.headers
  if(await checkData.Success){
    const payload =await createPayload(checkData,header);
    const jwt = await createJWT(payload)
    ctx.response.body = {Success:true,token:jwt};
  }else {
    ctx.response.body = checkData;
  }
})

export default AuthRoute;