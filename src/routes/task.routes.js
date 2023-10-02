import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js"

const router = Router()
/* 
          RUTAS CRUD 
*/
//Tomar todos los elementos
router.get('/task', authRequired,)
//toma un solo elemento
router.get('/task:id', authRequired,)
//crear un elemento
router.post('/task', authRequired,)
//borra un elemento
router.delete('/task:id', authRequired,)
//actualizar un elemento
router.put('/task:id', authRequired,)

export default router