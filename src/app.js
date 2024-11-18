import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./database/conexion.js";
import rutaRoutes from "./routes/ruta.routes.js";
import funcionRoutes from "./routes/funcion.routes.js";

const app = express();

// Invocar la conexión a la base de datos
connectDB();

// Configuración de CORS
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api", rutaRoutes);
app.use("/api", funcionRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

export default app;
