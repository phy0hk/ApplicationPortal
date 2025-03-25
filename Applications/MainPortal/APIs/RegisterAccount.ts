import { load } from "https://deno.land/std@0.218.2/dotenv/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import { RouterContext } from "https://jsr.io/@oak/oak/17.1.4/router.ts";
const env = await load();
const db = new Client({
    user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  hostname: env.DB_HOST,
})
async function register(ctx: RouterContext<"/register", Record<string | number, string | undefined>, Record<string, any>>){
const body = await ctx.request.body.json();
console.log(body)
}


async function checkUserNameExist(userName: any){
await db.connect();
}


async function checkEmailExist(email: any){

}

export {register};