import { load } from "https://deno.land/std@0.218.2/dotenv/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
const env = await load();
const db = new Client({
    user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  hostname: env.DB_HOST,
  port: Number(env.DB_PORT),
})
async function register(ctx){
const body = await ctx.request.body.json();
}


async function checkUserNameExist(userName){
await db.connect();
}


async function checkEmailExist(email){

}

export {register};