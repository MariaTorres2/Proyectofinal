import { gtoken } from "../config.js";
import jwt from "jsonwebtoken";

export async function createToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, gtoken, { expiresIn: "1d" }, (err, token) => {
      if (err) reject (err)
      resolve(token);
    });
  });
}
