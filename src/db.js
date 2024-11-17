import mongoose from "mongoose";

export const conectarMongo = async () => {
    try {
        await mongoose.connect("mongodb+srv://sa:123m@cluster0.il7ek.mongodb.net/bitacoras?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Conectado a MongoDB")
    } catch (error) {
        console.log(error);
    }
};