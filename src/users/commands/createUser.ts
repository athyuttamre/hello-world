import { hash } from "bcrypt";

import User from "../models/user";

const PASSWORD_SALT_ROUNDS = 10;

type createUserParams = {
  name: string;
  email: string;
  password: string;
};

const createUser = async (options: createUserParams): Promise<User> => {
  const user = new User();

  user.name = options.name;
  user.email = options.email;
  user.passwordHash = await hash(options.password, PASSWORD_SALT_ROUNDS);

  return await user.save();
};

export default createUser;
