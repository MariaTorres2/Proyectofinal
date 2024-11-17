import mongoose from "mongoose";

const bitacoraSchema = new mongoose.Schema({
    id_bitacora: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
    titulo: { 
        type: String, 
        required: true },
    fecha: {
        type: Date, 
        required: true },
    hora: 
    { type: String, 
        required: true },
    coordenadas: 
    { type: String, 
        required: true },
    condiciones_climaticas: 
    { type: String, 
        required: true },
    imagen_sitio: {
         type: String,
          required: true },
    descripcion_habitat: {
         type: String,
          required: true },
    observaciones: { 
        type: String, 
        required: false },
  });

  export default mongoose.model('Bitacora', bitacoraSchema);