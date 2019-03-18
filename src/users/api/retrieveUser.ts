import { Context } from "koa";

import User from "../models/user";

const retrieveUser = async (ctx: Context): Promise<void> => {
  const { id } = ctx.request.query;
  const user = await User.findOne(id);

  if (user) {
    ctx.status = 200;
    ctx.body = user;
  } else {
    ctx.status = 404;
  }
};

export default retrieveUser;
