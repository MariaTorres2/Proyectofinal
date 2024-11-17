import mongoose from "mongoose";

const muestreoSchema = new mongoose.Schema({
    id_muestreo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
    fecha: { 
        type: Date, 
        required: true },
    tamano_muestra: {
        type: String, 
        required: true },
    metodo_estudio: 
    { type: String, 
        required: true },
  });

  export default mongoose.model('Muestreo', muestreoSchema );