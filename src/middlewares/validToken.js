import { gtoken} from "../config.js";
import jwt from "jsonwebtoken"

export const autenreq = (req, res, next) => {
      console.log('Encabezados de la solicitud:', req.headers);
      try {
        const token = req.cookies;
        console.log('Token de la cookie:', token);
    
        if (!token) {
          return res.status(401).json({ message: "No está autorizado. Token no encontrado." });
        }
    
        jwt.verify(token, gtoken, (err, user) => {
          if (err) {
            console.log('Error al verificar el token:', error.message);
            return res.status(401).json({ message: "Token no válido" });
          }
    
          req.user = user;
          next();
        });
      } catch (error) {
        console.log('Error inesperado:', error.message);
        return res.status(500).json({ message: error.message });
      }
    };