import { compare } from "bcrypt";

const comparePassword = (password: string, hash: string): Promise<boolean> => {
  return compare(password, hash);
};

export default comparePassword;
