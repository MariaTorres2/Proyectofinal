import Usuario from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createToken} from "../libs/jwt.js";
import { set } from "mongoose";

export const registrar = async (req, res) => {
  console.log(req.body); 

  const {documento, email, password, nombre_usuario, rol } = req.body;

  if (!email || !password || !nombre_usuario || !rol) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {

    const passwordH = await bcrypt.hash(password, 10);
    const newUser = new Usuario({
      documento,
      email,
      password: passwordH,
      nombre_usuario, 
      rol
    });

    const userSaved = await newUser.save();

    const token = await createToken({ id: userSaved._id });
   
    res.cookie("token", token, { 
      httpOnly: true,
      secure: false, 
      sameSite: "none", 
    });

    res.status(201).json({
      token,
      user: {
        documento: userSaved.documento,
        email: userSaved.email,
        nombre_usuario: userSaved.nombre_usuario, 
        rol: userSaved.rol
      },
    });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};
