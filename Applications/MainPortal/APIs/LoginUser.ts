import { load } from "https://deno.land/std@0.218.2/dotenv/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
const env = await load();
const db = new Client({
    user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  hostname: env.DB_HOST,
})
async function login(ctx:any){
  const body = await ctx.request.body.json();
  
  const {username,email,password} = body;
  if(await checkUserExist(username,email)){
    const result = await authUser(username,email,password);
    if(await result.Success){
        return result;
    }
  }else{
    return {Success:false,ErrorMsg:"User not Found"};
  }
}
async function checkUserExist(userName: string,email:string){
    await db.connect();
    if(userName && email==""){
        const result = await db.queryObject(`SELECT * FROM users WHERE username = $1`,[userName]);
        return result.rows.length > 0;
    }else if(userName=="" && email){
        const result = await db.queryObject(`SELECT * FROM users WHERE email = $1`,[email]);
        return result.rows.length > 0;
    }else{
        return false;
    }
}
async function authUser(userName: string,email:string,password:string){
    await db.connect();
    const result = await db.queryObject(`SELECT * FROM users WHERE (username = $1 or email=$2) and password=$3`,[userName,email,password]);
    if (result.rows.length > 0){
        return {Success:true,ErrorMsg:"User Found",UserData:result.rows[0]};
    }else{
        return {Success:false,ErrorMsg:"User not Found"};
    }
}
export {login};