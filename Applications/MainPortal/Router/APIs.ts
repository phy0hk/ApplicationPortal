import { Router } from "jsr:@oak/oak/router";
import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import "https://deno.land/std@0.181.0/dotenv/load.ts";
import { create, getNumericDate, verify, decode } from "https://deno.land/x/djwt@v3.0.1/mod.ts";
import { register } from "../APIs/RegisterAccount.ts";
import { login } from "../APIs/LoginUser.ts";

const base64:string = Deno.env.get("SecretKey") || ""; 
const secret:Uint8Array = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
const APIRouter = new Router();

const db = new Client({
  user: Deno.env.get("DB_USER") ,
  password: Deno.env.get("DB_PASS") ,
  database: Deno.env.get("DB_NAME") ,
  hostname: Deno.env.get("DB_HOST") ,
})

APIRouter.post("/register",async (ctx)=>{
  ctx.response.body = await register(ctx)
})

APIRouter.post("/login",async (ctx)=>{
  const checkData:any = await login(ctx)
  if(checkData.Success){
    console.log(checkData.UserData);
    const payload = {
      iss: "deno.land",
      exp: getNumericDate(60 * 60),
      iat: getNumericDate(0),
      uid: checkData.UserData.id,
      username: checkData.UserData.username,
      email: checkData.UserData.email,
      name: checkData.UserData.name,
      verified: checkData.UserData.verified,
      createddate: checkData.UserData.createddate
    };
    const header = {
      alg: "HS256",
      typ: "JWT",
    };
    create(header,payload,secret).then((jwt) => {
      console.log(jwt);
      
    })
    ctx.response.body = {Success:true};
  }else {
    ctx.response.body = checkData;
  }
})

async function dbConnect() {
  console.log("Connecting to database");
  await db.connect().then(()=>{console.log("DB Connected");
  });
} 

dbConnect()

APIRouter.get("/getUserPreferences",async (ctx)=>{
  const header = ctx.request.headers

  if(header.get("secrets")==="12345"){
    //fetch data from database and then send it
    ctx.response.body = {Success:true,darkmode:false}
  }else{
    ctx.response.body = {Success:false,ErrorMsg:"Invalid Secrets"}
  }
})

APIRouter.get("/getAppsDetails",(ctx)=>{
  const header = ctx.request.headers
  if(header.get("secrets")==="12345"){
    ctx.response.body = {Success:true};
  }else{
    ctx.response.body = {Success:false,ErrorMsg:"Invalid Secrets"}
  }
})

APIRouter.post("/setUserPreferences",(ctx)=>{
  const header = ctx.request.headers
  const hasBody = ctx.request.hasBody
  if(header.get("secrets")==="12345" && hasBody){

    ctx.response.body = {Success:true};
  }else if(!hasBody){
    ctx.response.body = {Success:false,ErrorMsg:"There is no body!!!"}
  }
  else{
    ctx.response.body = {Success:false,ErrorMsg:"Invalid Secrets!!!"}
  }
})


export default APIRouter;
