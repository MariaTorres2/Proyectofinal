import Usuario from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const gusuario = (req, res) => {
    res.send("gusuario")
}