import app from "./app.js";
import {conectarMongo} from "./db.js"

conectarMongo();
app.listen(3000)
console.log ("Servidor en puerto: ", 3000)