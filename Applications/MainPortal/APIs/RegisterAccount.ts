import { db } from "../UtilFunc/Database.ts";
import { hashPwd } from "../UtilFunc/Auth.ts";


async function register(ctx: any) {
  const body = await ctx.request.body.json();
  const { name, username, password, email } = body;
  if (await !checkUsernameExist(username, email)) {
    return { Success: false, ErrorMsg: "Username already exists" };
  } else if (await !checkUserEmailExist(email)) {
    return { Success: false, ErrorMsg: "Email already exists" };
  } else {
    return await createUser(name, username, await hashPwd(password), email);
  }
}

async function checkUsernameExist(userName: string, email: string) {
  const result = await db.queryObject(
    `SELECT * FROM users WHERE username = $1`,
    [userName],
  );

  console.log(result.rows);

  if (result.rows.length > 0) {
    return false;
  } else {
    return true;
  }
}

async function checkUserEmailExist(email: string) {
  await db.connect();
  const result = await db.queryObject(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  if (result.rows.length > 0) return false;
  return true;
}

async function createUser(
  name: string,
  username: string,
  password: string,
  email: string,
) {
  await db.connect();
  const result = await db.queryObject(
    `INSERT INTO users (name,username,password,email,createddate,verified) VALUES ($1,$2,$3,$4,$5,$6)`,
    [name, username, password, email, new Date(), false],
  );
  if (result.rowCount && result.rowCount > 0) {
    return { Success: true, ErrorMsg: "User Created" };
  } else {
    return { Success: false, ErrorMsg: "User not Created" };
  }
}

export { register };
