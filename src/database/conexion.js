import mongoose from "mongoose";
import { databaseConfig } from "../config/index.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(databaseConfig.mongourl);
    console.log("Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};
