import { hash } from "bcrypt";

const PASSWORD_SALT_ROUNDS = 10;

const hashPassword = (password: string): Promise<string> => {
  return hash(password, PASSWORD_SALT_ROUNDS);
};

export default hashPassword;
