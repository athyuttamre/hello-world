import { Context } from "koa";

import createUserCommand from "../commands/createUser";

const createUser = async (ctx: Context): Promise<void> => {
  const { name, email, password } = ctx.request.body;
  const user = await createUserCommand({ name, email, password });
  ctx.status = 201;
  ctx.body = user;
};

export default createUser;
