import User from "../../users/models/user";

import comparePassword from "../commands/comparePassword";
import signJwt from "../commands/signJwt";

const loginUser = async (options: {
  email: string;
  password: string;
}): Promise<string> => {
  const { email, password } = options;

  const user = await User.findOne({ email });
  if (!user) {
    // TODO: return error object so the API method can return 404.
    throw new Error("User not found.");
  }

  const passwordMatches = await comparePassword(password, user.passwordHash);
  if (!passwordMatches) {
    // TODO: return error object so the API method can return 401.
    throw new Error("Invalid credentials.");
  }

  const jwt = signJwt({ userId: user.id });
  return Promise.resolve(jwt);
};

export default loginUser;
