import {Router} from "jsr:@oak/oak/router";
import {register} from "../APIs/RegisterAccount.js";
const APIRouter = new Router();
APIRouter.post("/register", async (ctx) => {
  await register(ctx);
});
export {APIRouter};