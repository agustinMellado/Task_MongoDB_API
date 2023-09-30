import express from "express";
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(morgan('dev'))//config para mostra msj por consola.

app.use(authRoutes);

export default app;