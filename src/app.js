import express from "express";
import morgan from 'morgan';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js'
import cookieParser from 'cookie-parser'
const app = express();


app.use(cors(//permite que todos los dominios se comuniquen en este servicio
    { origin: 'https://localhost:5173' }//especifico el puerto front a comunicar
))
app.use(morgan('dev'))//config para mostra msj por consola.
app.use(express.json());// para que convertir los req.body en un formato json
app.use(cookieParser());
//rutas
app.use('/api', authRoutes);
app.use('/api', taskRoutes)

export default app;