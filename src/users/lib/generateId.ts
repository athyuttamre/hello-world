import { generate } from "randomstring";

const ID_LENGTH = 32;
const PREFIX_LENGTH = 4;

const generateId = (prefix: string) => {
  if (prefix.length !== PREFIX_LENGTH) {
    throw new Error(`Prefix must be of length ${PREFIX_LENGTH}.`);
  }

  return `${prefix}_${generate(ID_LENGTH - PREFIX_LENGTH)}`;
};

export default generateId;
