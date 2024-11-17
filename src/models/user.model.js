import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  documento: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },  
  nombre_usuario: {
    type: String,
    required: true,
    trim: true,
  },
 rol: {
    type: String,
    required: true,
    trim: true,
  }
});

export default mongoose.model('Usuario', usuarioSchema);