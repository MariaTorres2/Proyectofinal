import { Router} from "express";
import  {login, logout} from "../controllers/login.controller.js"
import  {registrar} from "../controllers/registrar.controller.js"
import  {gusuario} from "../controllers/gusuario.controller.js"
import  {autenreq} from "../middlewares/validToken.js"

const router = Router();

router.post('/registrar', registrar);
router.post("/login", login);
router.post("/logout", logout);
router.get("/gusuario",autenreq, gusuario);

export default router;