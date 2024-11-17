import Usuario from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createToken} from "../libs/jwt.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "El email y la contraseña son obligatorios" });
  }

  try {
    const user = await Usuario.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }
    const token = await createToken ({ id: user._id,  username: user.username,}
    );
    console.log("Token generado:", token);
   

res.cookie("token", token, { 
  httpOnly: true,
  secure: true, 
  sameSite: "none", 
});
console.log("Encabezados de respuesta:", res.getHeaders());
console.log("salto");
console.log("Cookies configuradas:", res.getHeaders()["set-cookie"]);
    res.status(200).json({
      token,
      user: {
        id: user._id,
        nombre_persona: user.nombre_persona,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};


export const logout = async (req, res) => {
  res.cookie("Token", "", {
    // httpOnly: true,
    // secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
