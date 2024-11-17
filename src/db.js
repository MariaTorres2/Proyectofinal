import mongoose from "mongoose";

export const conectarMongo = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Botanica")
        console.log("Conectado a MongoDB")
    } catch (error) {
        console.log(error);
    }
};