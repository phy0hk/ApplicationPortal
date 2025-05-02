import { load } from "https://deno.land/std@0.218.2/dotenv/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
const env = await load();
const db = new Client({
    user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  hostname: env.DB_HOST,
})

async function register(ctx:any){
const body = await ctx.request.body.json();
const {name,username,password,email} = body;
if(await checkUserExist(username,email)){
  if(await checkUserEmailExist(email)){
    return await createUser(name,username,password,email)
  }else{
    return {Success:false,ErrorMsg:"Email already exists"};
  }
}else{
  return {Success:false,ErrorMsg:"Username already exists"};
}
}

async function checkUserExist(userName: string,email:string){
await db.connect();
const result = await db.queryObject(`SELECT * FROM users WHERE username = $1`,[userName]);
console.log(result.rows);

if(result.rows.length > 0){
    return false;
}else{
  return true;
}
}
async function checkUserEmailExist(email:string){
  await db.connect();
  const result = await db.queryObject(`SELECT * FROM users WHERE email = $1`,[email]);
  if(result.rows.length > 0){return false};
  return true;
}
async function createUser(name:string,username:string,password:string,email:string){
  await db.connect();
  const result = await db.queryObject(`INSERT INTO users (name,username,password,email,createddate,verified) VALUES ($1,$2,$3,$4,$5,$6)`,[name,username,password,email,new Date(),false]);
  if(result.rowCount && result.rowCount > 0){
    return {Success:true,ErrorMsg:"User Created"};
  }else{
    return {Success:false,ErrorMsg:"User not Created"};
  }
}


export {register};