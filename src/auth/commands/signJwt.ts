import { sign } from "jsonwebtoken";

const SESSION_DURATION = "1 day";

const secret = process.env.JWT_SHARED_SECRET;
if (!secret) {
  throw new Error("Missing JWT secret.");
}

const signJwt = (payload: object): string => {
  return sign(payload, secret, {
    expiresIn: SESSION_DURATION
  });
};

export default signJwt;
