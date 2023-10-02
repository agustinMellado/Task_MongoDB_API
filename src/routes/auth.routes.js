import { Router } from "express";
import { register ,login, cerrarSesion,profile} from "../controllers/auth.controller.js";

const router = Router()

router.post('/register',register)
router.post('/login',login)
router.post('/cerrarSesion',cerrarSesion)
router.get('/profile',profile)

export default router;