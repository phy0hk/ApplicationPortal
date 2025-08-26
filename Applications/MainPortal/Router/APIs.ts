import { Router } from "jsr:@oak/oak/router";
const APIRouter = new Router();

APIRouter.get("/getUserPreferences",async (ctx)=>{
  const header = ctx.request.headers

  if(header.get("secrets")==="12345"){
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
