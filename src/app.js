import express from "express";
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js'
import cookieParser from 'cookie-parser'
const app = express();

app.use(morgan('dev'))//config para mostra msj por consola.
app.use(express.json());// para que convertir los req.body en un formato json
app.use(cookieParser());
app.use('/api',authRoutes);
app.use('/api', taskRoutes)

export default app;