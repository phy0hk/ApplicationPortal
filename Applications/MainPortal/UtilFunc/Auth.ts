// import { assert } from "jsr:@std/assert";
import { hash, verify } from "jsr:@felix/argon2";
import { JWTPayload, jwtVerify, SignJWT } from "npm:jose@5.9.6";


const base64:string = Deno.env.get("SecretKey") || ""; 
const secret:Uint8Array = Uint8Array.from(atob(base64), c => c.charCodeAt(0));

async function hashPwd(password:string){
    const hashedPwd = await hash(password);
    return hashedPwd;
}
async function verifyPwd(hashedPwd:string,password:string){
    const isValid = await verify(hashedPwd,password);
    return isValid;
}
async function createJWT(payload: JWTPayload): Promise<string> {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);

  return jwt;
}

async function verifyJWT(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    console.log("JWT is valid:", payload);
    return payload;
  } catch (error) {
    console.error("Invalid JWT:", error);
    return null;
  }
}
async function Auth(token:string,header:Headers){
    const payload = await verifyJWT(token);
    if(!payload){
        return false;
    }else{
        const userAgent = header.get("user-agent");
        const ip = header.get("ip");
        if(payload.UserAgent === userAgent || payload.ip === ip){
            return true;
        }else{
            return false;
        }
    }
}
async function createPayload(data:any,header:Headers){
    const payload = {
      uid: data.UserData.id,
      username: data.UserData.username,
      email: data.UserData.email,
      name: data.UserData.name,
      verified: data.UserData.verified,
      createddate: data.UserData.createddate,
      UserAgent: header.get("user-agent"),
      ip: header.get('ip')
    };
    return payload;
}

export {hashPwd,createJWT,Auth,createPayload,verifyJWT,verifyPwd};