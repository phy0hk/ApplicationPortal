import { Router } from "jsr:@oak/oak/router";
import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import "https://deno.land/std@0.181.0/dotenv/load.ts";
const APIRouter = new Router();

const db = new Client({
  user: Deno.env.get("DB_USER") ,
  password: Deno.env.get("DB_PASS") ,
  database: Deno.env.get("DB_NAME") ,
  hostname: Deno.env.get("DB_HOST") ,
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
