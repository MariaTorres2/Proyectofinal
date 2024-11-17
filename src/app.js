import express from 'express';
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import rutaRoutes from "./routes/ruta.routes.js"
import funcionRoutes from "./routes/funcion.routes.js"
import cors from "cors";


const app = express()

app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true, 
}));

app.use(morgan ('dev'));
app.use (express.json());
app.use(cookieParser());
app.use("/api", rutaRoutes);
app.use("/api", funcionRoutes);
export default app