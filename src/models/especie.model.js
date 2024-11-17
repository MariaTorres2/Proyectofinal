import mongoose from "mongoose";

const especieSchema = new mongoose.Schema({
    id_especie: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
    nombre_cientifico: { 
        type: String, 
        required: true },
    nombre_comun: {
        type: String, 
        required: true },
    familia: 
    { type: String, 
        required: true },
    cantidad_muestra: 
    { type: String, 
        required: true },
  });

  export default mongoose.model('Especie', especieSchema);

 