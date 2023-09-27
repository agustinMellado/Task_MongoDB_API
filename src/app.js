import express from "express";
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'))//config para mostra msj por consola.
export default app;