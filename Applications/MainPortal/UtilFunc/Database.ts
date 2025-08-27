import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";

const db = new Client({
  user: Deno.env.get("DB_USER") ,
  password: Deno.env.get("DB_PASS") ,
  database: Deno.env.get("DB_NAME") ,
  hostname: Deno.env.get("DB_HOST") ,
})
function dbConnect() {
    db.connect().then(() => {
        console.log("DB Connected");
    })
}
export { db,dbConnect };