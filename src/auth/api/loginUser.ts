import { Context } from "koa";

import loginUserCommand from "../commands/loginUser";

const loginUser = async (ctx: Context): Promise<void> => {
  const { email, password } = ctx.request.body;
  const jwt = await loginUserCommand({ email, password });
  ctx.body = jwt;
};

export default loginUser;
