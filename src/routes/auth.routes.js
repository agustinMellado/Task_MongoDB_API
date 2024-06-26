import { Router } from "express";
import { register, login, cerrarSesion, profile, verificarToken } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"



const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/cerrarSesion', cerrarSesion)
router.get('/verify',verificarToken)
router.get('/profile', authRequired, profile)

export default router;