import { Router } from "express";
import { register ,login, cerrarSesion} from "../controllers/auth.controller.js";

const router = Router()

router.post('/register',register)
router.post('/login',login)
router.post('/cerrarSesion',cerrarSesion)

export default router;