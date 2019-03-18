import hashPassword from "../../auth/commands/hashPassword";

import User from "../models/user";

const createUser = async (options: {
  name: string;
  email: string;
  password: string;
}): Promise<User> => {
  const { name, email, password } = options;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("A user with that email already exists.");
  }

  const user = new User();

  user.name = name;
  user.email = email;
  user.passwordHash = await hashPassword(password);

  return await user.save();
};

export default createUser;
