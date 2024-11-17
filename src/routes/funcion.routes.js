import { Router } from "express";
import { autenreq } from "../middlewares/validToken.js";
import { getbitacora,getbitacoras, createbitacora, deletebitacora, updatebitacora} from "../controllers/funciones.controllers.js";
import { getespecies,getespecie, createspecie, deleteespecie, updatespecie} from "../controllers/funciones.controllers.js";
import { getmuestreo,getmuestreos, createmuestreo, deletemuestreo, updatemuestreo} from "../controllers/funciones.controllers.js";
import { getusuario,getusuarios,  deleteusuario,updateusuario} from "../controllers/funciones.controllers.js";

const router =Router ();

router.get('/bitacora', getbitacoras)
router.post('/bitacora', createbitacora)
router.get('/bitacora/:id_bitacora', getbitacora)
router.delete('/bitacora/:id_bitacora', deletebitacora )
router.put('/bitacora/:id_bitacora', updatebitacora )

router.get('/muestreo', getmuestreos)
router.post('/muestreo', createmuestreo)
router.get('/muestreo/:id_muestreo', getmuestreo)
router.delete('/muestreo/:id_muestreo', deletemuestreo)
router.put('/muestreo/:id_muestreo', updatemuestreo)

router.get('/especie', getespecies)
router.post('/especie', createspecie)
router.get('/especie/:id_especie', getespecie)
router.delete('/especie/:id_especie', deleteespecie)
router.put('/especie/:id_especie', updatespecie)

router.get('/usuarios', getusuarios)
router.get('/usuario/:documento', getusuario)
router.delete('/usuario/:documento', deleteusuario)
router.put('/usuario/:documento', updateusuario)

export default router;