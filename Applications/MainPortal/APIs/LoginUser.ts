import {  verifyPwd } from "../UtilFunc/Auth.ts";
import { db } from "../UtilFunc/Database.ts";
async function login(ctx: any) {
  const body = await ctx.request.body.json();

  const { username, email, password } = body;
    const result = await authUser(username, email, password);
    if (await result.Success) {
      return result;
    }else {
    return result;
  }
}
async function checkUserExist(userName: string, email: string) {
  if (userName && email == "") {
    const result = await db.queryObject(
      `SELECT * FROM users WHERE username = $1`,
      [userName],
    );
    return result.rows.length > 0;
  } else if (userName == "" && email) {
    const result = await db.queryObject(
      `SELECT * FROM users WHERE email = $1`,
      [email],
    );
    return result.rows.length > 0;
  } else {
    return false;
  }
}
async function authUser(userName: string, email: string, password: string) {
  const result = await db.queryObject(
    `SELECT * FROM users WHERE (username = $1 or email=$2)`,
    [userName, email],
  );
  if (result.rows.length > 0) {
    // return { Success: true, ErrorMsg: "User Found", UserData: result.rows[0] };
    const DBPassword = result.rows[0].password;
    
    if (await verifyPwd(DBPassword,password)) {
      return { Success: true, Msg: "Login Success", UserData: result.rows[0] };
    }else{
        return { Success: false, Msg: "Password is incorrect" };
    }
  } else {
    return { Success: false, Msg: "User not Found" };
  }
}
export { login };
