import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js"
import { getTasks, getTask, createTask, deleteTask, updateTask } from "../controllers/tasks.controller.js";
import cacheInit from "../middlewares/cache.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/createTask.schema.js"

const router = Router()
/* 
          RUTAS CRUD 
*/
//Tomar todos los elementos
router.get('/task', authRequired, cacheInit, getTasks)
//toma un solo elemento
router.get('/task/:id', authRequired, getTask)
//crear un elemento
router.post('/task', authRequired, validateSchema(createTaskSchema), createTask)
//borra un elemento
router.delete('/task/:id', authRequired, deleteTask)
//actualizar un elemento
router.put('/task/:id', authRequired, updateTask)

export default router