import Bitacora from "../models/bitacora.model.js";
import Muestreo from "../models/muestreo.model.js";
import Especie from "../models/especie.model.js";
import Usuario from "../models/user.model.js";

// Bitácoras

// Obtener todas las bitácoras
export const getbitacoras = async (req, res) => {
  try {
    const bitacoras = await Bitacora.find();
    res.status(200).json(bitacoras);
  } catch (error) {
    console.error("Error al obtener bitácoras:", error);
    res.status(500).json({ error: "Error al obtener bitácoras" });
  }
};

// Obtener una bitácora por ID
export const getbitacora = async (req, res) => {
  const { id_bitacora } = req.params;
  try {
    const bitacora = await Bitacora.findOne({ id_bitacora });
    if (!bitacora) {
      return res.status(404).json({ message: `Bitácora con ID ${id_bitacora} no encontrada` });
    }
    res.status(200).json(bitacora);
  } catch (error) {
    console.error("Error al obtener bitácora:", error);
    res.status(500).json({ error: "Error al obtener bitácora" });
  }
};

// Crear una nueva bitácora
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

  try {
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

    const bitacoraGuardada = await nuevaBitacora.save();
    res.status(201).json(bitacoraGuardada);
  } catch (error) {
    console.error("Error al crear bitácora:", error);
    res.status(500).json({ error: "Error al crear bitácora" });
  }
};

// Actualizar una bitácora
export const updatebitacora = async (req, res) => {
  const { id_bitacora } = req.params;
  const updatedData = req.body;

  try {
    const bitacoraActualizada = await Bitacora.findOneAndUpdate(
      { id_bitacora },
      updatedData,
      { new: true }
    );
    if (!bitacoraActualizada) {
      return res.status(404).json({ message: `Bitácora con ID ${id_bitacora} no encontrada` });
    }
    res.status(200).json(bitacoraActualizada);
  } catch (error) {
    console.error("Error al actualizar bitácora:", error);
    res.status(500).json({ error: "Error al actualizar bitácora" });
  }
};

// Eliminar una bitácora
export const deletebitacora = async (req, res) => {
  const { id_bitacora } = req.params;
  try {
    const bitacoraEliminada = await Bitacora.findOneAndDelete({ id_bitacora });
    if (!bitacoraEliminada) {
      return res.status(404).json({ message: `Bitácora con ID ${id_bitacora} no encontrada` });
    }
    res.status(200).json({ message: "Bitácora eliminada" });
  } catch (error) {
    console.error("Error al eliminar bitácora:", error);
    res.status(500).json({ error: "Error al eliminar bitácora" });
  }
};

// Muestreos

// Obtener todos los muestreos
export const getmuestreos = async (req, res) => {
  try {
    const muestreos = await Muestreo.find();
    res.status(200).json(muestreos);
  } catch (error) {
    console.error("Error al obtener muestreos:", error);
    res.status(500).json({ error: "Error al obtener muestreos" });
  }
};

// Obtener un muestreo por ID
export const getmuestreo = async (req, res) => {
  const { id_muestreo } = req.params;
  try {
    const muestreo = await Muestreo.findOne({ id_muestreo });
    if (!muestreo) {
      return res.status(404).json({ message: `Muestreo con ID ${id_muestreo} no encontrado` });
    }
    res.status(200).json(muestreo);
  } catch (error) {
    console.error("Error al obtener muestreo:", error);
    res.status(500).json({ error: "Error al obtener muestreo" });
  }
};

// Crear un nuevo muestreo
export const createmuestreo = async (req, res) => {
  const { id_muestreo, fecha, tamano_muestra, metodo_estudio } = req.body;

  try {
    const nuevoMuestreo = new Muestreo({
      id_muestreo,
      fecha,
      tamano_muestra,
      metodo_estudio,
    });

    const muestreoGuardado = await nuevoMuestreo.save();
    res.status(201).json(muestreoGuardado);
  } catch (error) {
    console.error("Error al crear muestreo:", error);
    res.status(500).json({ error: "Error al crear muestreo" });
  }
};

// Actualizar un muestreo
export const updatemuestreo = async (req, res) => {
  const { id_muestreo } = req.params;
  const updatedData = req.body;

  try {
    const muestreoActualizado = await Muestreo.findOneAndUpdate(
      { id_muestreo },
      updatedData,
      { new: true }
    );
    if (!muestreoActualizado) {
      return res.status(404).json({ message: `Muestreo con ID ${id_muestreo} no encontrado` });
    }
    res.status(200).json(muestreoActualizado);
  } catch (error) {
    console.error("Error al actualizar muestreo:", error);
    res.status(500).json({ error: "Error al actualizar muestreo" });
  }
};

// Eliminar un muestreo
export const deletemuestreo = async (req, res) => {
  const { id_muestreo } = req.params;
  try {
    const muestreoEliminado = await Muestreo.findOneAndDelete({ id_muestreo });
    if (!muestreoEliminado) {
      return res.status(404).json({ message: `Muestreo con ID ${id_muestreo} no encontrado` });
    }
    res.status(200).json({ message: "Muestreo eliminado" });
  } catch (error) {
    console.error("Error al eliminar muestreo:", error);
    res.status(500).json({ error: "Error al eliminar muestreo" });
  }
};

// Especies

// Obtener todas las especies
export const getespecies = async (req, res) => {
  try {
    const especies = await Especie.find();
    res.status(200).json(especies);
  } catch (error) {
    console.error("Error al obtener especies:", error);
    res.status(500).json({ error: "Error al obtener especies" });
  }
};

// Obtener una especie por ID
export const getespecie = async (req, res) => {
  const { id_especie } = req.params;
  try {
    const especie = await Especie.findOne({ id_especie });
    if (!especie) {
      return res.status(404).json({ message: `Especie con ID ${id_especie} no encontrada` });
    }
    res.status(200).json(especie);
  } catch (error) {
    console.error("Error al obtener especie:", error);
    res.status(500).json({ error: "Error al obtener especie" });
  }
};

// Crear una nueva especie
export const createspecie = async (req, res) => {
  const { id_especie, nombre_cientifico, nombre_comun, familia, cantidad_muestra } = req.body;

  try {
    const nuevaEspecie = new Especie({
      id_especie,
      nombre_cientifico,
      nombre_comun,
      familia,
      cantidad_muestra,
    });

    const especieGuardada = await nuevaEspecie.save();
    res.status(201).json(especieGuardada);
  } catch (error) {
    console.error("Error al crear especie:", error);
    res.status(500).json({ error: "Error al crear especie" });
  }
};

// Actualizar una especie
export const updatespecie = async (req, res) => {
  const { id_especie } = req.params;
  const updatedData = req.body;

  try {
    const especieActualizada = await Especie.findOneAndUpdate(
      { id_especie },
      updatedData,
      { new: true }
    );
    if (!especieActualizada) {
      return res.status(404).json({ message: `Especie con ID ${id_especie} no encontrada` });
    }
    res.status(200).json(especieActualizada);
  } catch (error) {
    console.error("Error al actualizar especie:", error);
    res.status(500).json({ error: "Error al actualizar especie" });
  }
};

// Eliminar una especie
export const deleteespecie = async (req, res) => {
  const { id_especie } = req.params;
  try {
    const especieEliminada = await Especie.findOneAndDelete({ id_especie });
    if (!especieEliminada) {
      return res.status(404).json({ message: `Especie con ID ${id_especie} no encontrada` });
    }
    res.status(200).json({ message: "Especie eliminada" });
  } catch (error) {
    console.error("Error al eliminar especie:", error);
    res.status(500).json({ error: "Error al eliminar especie" });
  }
};

// Usuarios

// Obtener todos los usuarios
export const getusuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

// Obtener un usuario por documento
export const getusuario = async (req, res) => {
  const { documento } = req.params;
  try {
    const usuario = await Usuario.findOne({ documento });
    if (!usuario) {
      return res.status(404).json({ message: `Usuario con documento ${documento} no encontrado` });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

// Actualizar un usuario
export const updateusuario = async (req, res) => {
  const { documento } = req.params;
  const updatedData = req.body;

  try {
    const usuarioActualizado = await Usuario.findOneAndUpdate(
      { documento },
      updatedData,
      { new: true }
    );
    if (!usuarioActualizado) {
      return res.status(404).json({ message: `Usuario con documento ${documento} no encontrado` });
    }
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

// Eliminar un usuario
export const deleteusuario = async (req, res) => {
  const { documento } = req.params;
  try {
    const usuarioEliminado = await Usuario.findOneAndDelete({ documento });
    if (!usuarioEliminado) {
      return res.status(404).json({ message: `Usuario con documento ${documento} no encontrado` });
    }
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
