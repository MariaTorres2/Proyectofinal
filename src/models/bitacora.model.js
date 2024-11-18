import mongoose from "mongoose";

const bitacoraSchema = new mongoose.Schema(
  {
    id_bitacora: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    titulo: {
      type: String,
      required: true,
      trim: true, // Elimina espacios adicionales
    },
    fecha: {
      type: Date,
      required: true,
    },
    hora: {
      type: String,
      required: true,
    },
    coordenadas: {
      type: String,
      required: true,
      trim: true,
    },
    condiciones_climaticas: {
      type: String,
      required: true,
      trim: true,
    },
    imagen_sitio: {
      type: String,
      required: false,
    },
    descripcion_habitat: {
      type: String,
      required: true,
      trim: true,
    },
    observaciones: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, 
  }
);

export default mongoose.model("Bitacora", bitacoraSchema);
