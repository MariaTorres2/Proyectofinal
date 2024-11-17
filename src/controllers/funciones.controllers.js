import Bitacora from "../models/bitacora.model.js";
import Muestreo from "../models/muestreo.model.js";
import Especie from "../models/especie.model.js";
import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";  
const client = new MongoClient(url);


////bitacora
export const getbitacoras = async (req, res) => {
  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
    .collection("bitacoras").find().toArray();
    res.json(result);
  } catch (error) {
    console.error("Error al obtener bitacoras:", error);
    res.json({ error: "Error al obtener bitacoras" });
  } 
}

export const getbitacora = async (req, res) => {
  let { id_bitacora} = req.params;

  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
      .collection("bitacoras")
      .findOne({ id_bitacora });
    if (result) {
      res.json(result);
    } else {
      res
        .json({ message: `Bitacora con id ${id_bitacora} no encontrado.` });
    }
  } catch (error) {
    console.error("Error al obtener la bitacora:", error);
    res.json({ error: "Error al obtener la bitacora" });
  } 
}

export const createbitacora = async (req, res) => {
    const {
      id_bitacora,
      titulo,
      fecha,
      hora,
      coordenadas,
      condiciones_climaticas,
      imagen_sitio,
      descripcion_habitat,
      observaciones,
    } = req.body;
  
    const nuevaBitacora = new Bitacora({
      id_bitacora,
      titulo,
      fecha,
      hora,
      coordenadas,
      condiciones_climaticas,
      imagen_sitio,
      descripcion_habitat,
      observaciones,
    });
  
    try {
      const bitacoraExistente = await Bitacora.findOne({ titulo, fecha });
  
      if (bitacoraExistente) {
        return res.status(400).json({
          error: "La bitácora con el mismo título y fecha ya existe",
        });
      }
  
      const bitacoraGuardar = await nuevaBitacora.save();
  
      res.status(201).json({
        message: "Bitácora agregada",
        data: bitacoraGuardar,
      });
    } catch (error) {
      console.error("Error al agregar bitácora:", error);
      res.status(500).json({ error: `Error al agregar bitácora: ${error.message}` });
    }
  };
    


export const updatebitacora = async (req, res) => {
  let { id_bitacora } = req.params;
  const updatedData = req.body;

  if (!updatedData || Object.keys(updatedData).length === 0) {
    return res.json({ message: "No se proporcionaron datos para actualizar." });
  }

  console.log("Actualizando bitácora con id:", id_bitacora);

  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
      .collection("bitacoras")
      .updateOne({ id_bitacora: id_bitacora }, { $set: updatedData });

    if (result.modifiedCount > 0) {
      res.json({ message: `Bitácora con id ${id_bitacora} actualizada.` });
    } else {
      res.json({ message: `No se encontró bitácora con id ${id_bitacora}.` });
    }
  } catch (error) {
    console.error("Error al actualizar bitácora:", error);
    res.json({ error: "Error al actualizar bitácora" });
  } 
    
}

export const deletebitacora = async (req, res) => {
  let { id_bitacora } = req.params;

  try {

    await client.connect();  
    const db = client.db("Botanica");  
    const result = await db.collection("bitacoras").deleteOne({ id_bitacora });  

    if (result.deletedCount > 0) {
      res.json({ message: `Bitácora con id ${id_bitacora} eliminada.` });
    } else {
      res.json({ message: `No existe ninguna bitácora con id ${id_bitacora}.` });
    }
  } catch (error) {
    console.error("Error al eliminar bitácora:", error);
    res.status(500).json({ error: "Error al eliminar bitácora" });
  } 
};

////Muestreo

export const getmuestreos= async (req, res) => {
  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
    .collection("muestreos").find().toArray();
    res.json(result);
  } catch (error) {
    console.error("Error al obtener muestreos:", error);
    res.json({ error: "Error al obtener muestreos" });
  } 
}

export const getmuestreo = async (req, res) => {
  let {id_muestreo} = req.params;

  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
      .collection("muestreos")
      .findOne({ id_muestreo });
    if (result) {
      res.json(result);
    } else {
      res
        .json({ message: `Bitacora con id ${id_muestreo} no encontrado.` });
    }
  } catch (error) {
    console.error("Error al obtener el muestreo:", error);
    res.json({ error: "Error al obtener el muestro" });
  } 
}

export const createmuestreo= async (req, res) => {
  const {
    id_muestreo,
    fecha,
    tamano_muestra,
    metodo_estudio
  } = req.body;

  const nuevoMuestreo = new Muestreo({
    id_muestreo,
    fecha,
    tamano_muestra,
    metodo_estudio
  });

  try {
    const muestreoExistente = await Muestreo.findOne({ id_muestreo });

    if (muestreoExistente) {
      return res.status(400).json({
        error: "El muestreo ya existe",
      });
    }
    const muestreoGuardar = await nuevoMuestreo.save();
    res.status(201).json({
      message: "Muestreo agregado",
      data: muestreoGuardar,
    });
  } catch (error) {
    console.error("Error al agregar muestreo:", error);
    res.status(500).json({ error: `Error al agregar muestreo: ${error.message}` });
  } 
}

export const updatemuestreo = async (req, res) => {
  let { id_muestreo } = req.params;
  const updatedData = req.body;

  if (!updatedData || Object.keys(updatedData).length === 0) {
    return res.json({ message: "No se proporcionaron datos para actualizar." });
  }

  console.log("Actualizando muestreo con id:", id_muestreo);

  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
      .collection("muestreos")
      .updateOne({ id_muestreo: id_muestreo}, { $set: updatedData });

    if (result.modifiedCount > 0) {
      res.json({ message: `Muestreo con id ${id_muestreo} actualizada.` });
    } else {
      res.json({ message: `No se encontró muestreo con id ${id_muestreo}.` });
    }
  } catch (error) {
    console.error("Error al actualizar muestreo:", error);
    res.json({ error: "Error al actualizar muestreo" });
  } 
    
}

export const deletemuestreo = async (req, res) => {
  let { id_muestreo } = req.params;

  try {

    await client.connect();  
    const db = client.db("Botanica");  
    const result = await db.collection("muestreos").deleteOne({ id_muestreo });  

    if (result.deletedCount > 0) {
      res.json({ message: `Muestreos con id ${id_muestreo} eliminada.` });
    } else {
      res.json({ message: `No existe ningun muestreo con id ${id_muestreo}.` });
    }
  } catch (error) {
    console.error("Error al eliminar muestreo:", error);
    res.status(500).json({ error: "Error al eliminar muestreo" });
  } 
    
}

////Especie

export const getespecies= async (req, res) => {
  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
    .collection("especies").find().toArray();
    res.json(result);
  } catch (error) {
    console.error("Error al obtener especies:", error);
    res.json({ error: "Error al obtener especies" });
  } 
}

export const getespecie = async (req, res) => {
  let {id_especie} = req.params;

  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
      .collection("especies")
      .findOne({ id_especie});
    if (result) {
      res.json(result);
    } else {
      res
        .json({ message: `Especie con id ${id_especie} no encontrada.` });
    }
  } catch (error) {
    console.error("Error al obtener la especie:", error);
    res.json({ error: "Error al obtener la especie" });
  } 
    
}

export const createspecie= async (req, res) => {
  const {
    id_especie,
    nombre_cientifico,
    nombre_comun,
    familia,
    cantidad_muestra,
  } = req.body;

  const nuevoEspecie = new Especie({
    id_especie,
    nombre_cientifico,
    nombre_comun,
    familia,
    cantidad_muestra,
  });

  try {
    const especieExistente = await Especie.findOne({ id_especie});

    if (especieExistente) {
      return res.status(400).json({
        error: "La especie ya existe",
      });
    }
    const especieGuardar = await nuevoEspecie .save();
    res.status(201).json({
      message: "Especie agregada",
      data: especieGuardar,
    });
  } catch (error) {
    console.error("Error al agregar especie:", error);
    res.status(500).json({ error: `Error al agregar especie: ${error.message}` });
  } 
    
}

export const updatespecie = async (req, res) => {
  let { id_especie } = req.params;
  const updatedData = req.body;

  if (!updatedData || Object.keys(updatedData).length === 0) {
    return res.json({ message: "No se proporcionaron datos para actualizar." });
  }

  console.log("Actualizando especie con id:", id_especie);

  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
      .collection("especies")
      .updateOne({ id_especie: id_especie}, { $set: updatedData });

    if (result.modifiedCount > 0) {
      res.json({ message: `Especie con id ${id_especie} actualizada.` });
    } else {
      res.json({ message: `No se encontró especie con id ${id_especie}.` });
    }
  } catch (error) {
    console.error("Error al actualizar especie:", error);
    res.json({ error: "Error al actualizar especie" });
  } 
    
}

export const deleteespecie = async (req, res) => {
  let { id_especie } = req.params;

  try {

    await client.connect();  
    const db = client.db("Botanica");  
    const result = await db.collection("especies").deleteOne({ id_especie });  

    if (result.deletedCount > 0) {
      res.json({ message: `Especie con id ${id_especie} eliminada.` });
    } else {
      res.json({ message: `No existe ninguna especie con id ${id_especie}.` });
    }
  } catch (error) {
    console.error("Error al eliminar especie:", error);
    res.status(500).json({ error: "Error al eliminar especie" });
  } 
    
}

////Usuario

export const getusuarios= async (req, res) => {

  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
    .collection("usuarios").find().toArray();
    res.json(result);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.json({ error: "Error al obtener usuarios" });
  } 
}

export const getusuario = async (req, res) => {
  let {documento} = req.params;
  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
      .collection("usuarios")
      .findOne({documento});
    if (result) {
      res.json(result);
    } else {
      res
        .json({ message: `Uusuario con documento ${documento} no encontrado.` });
    }
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.json({ error: "Error al obtener el usuario" });
  } 
}

export const updateusuario = async (req, res) => {
  let { documento } = req.params;
  const updatedData = req.body;

  if (!updatedData || Object.keys(updatedData).length === 0) {
    return res.json({ message: "No se proporcionaron datos para actualizar." });
  }

  console.log("Actualizando usuario con documento:", documento);

  try {
    await client.connect();  
    const db = client.db("Botanica"); 
    const result = await db
      .collection("usuarios")
      .updateOne({ documento: documento}, { $set: updatedData });

    if (result.modifiedCount > 0) {
      res.json({ message: `Usuario con documento ${documento} actualizada.` });
    } else {
      res.json({ message: `No se encontró usuario con documento ${documento}.` });
    }
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.json({ error: "Error al actualizar usuario" });
  } 
    
}

export const deleteusuario= async (req, res) => {
  let { documento } = req.params;
  try {
    await client.connect();  
    const db = client.db("Botanica");  
    const result = await db.collection("usuarios").deleteOne({ documento });  

    if (result.deletedCount > 0) {
      res.json({ message: `Usuario con documento ${documento} eliminado.` });
    } else {
      res.json({ message: `No existe ningun usuario con documento ${documento}.` });
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ error: "Error al eliminar usuario" });
  }    
}