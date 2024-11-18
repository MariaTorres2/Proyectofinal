import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./database/conexion.js";
import rutaRoutes from "./routes/ruta.routes.js";
import funcionRoutes from "./routes/funcion.routes.js";

const port = process.env.PORT || 3000;
const app = express();

// Invocar la conexión a la base de datos
connectDB();

// Middlewares
app.use(morgan('dev')); 
app.use(express.json());
app.use(cors()); 
app.use(cookieParser());

// Rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.use("/api", rutaRoutes);
app.use("/api", funcionRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
