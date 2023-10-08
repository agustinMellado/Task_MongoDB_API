import express from "express";
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js'
import cookieParser from 'cookie-parser'
//importaciones para utilizar redis
import axios from 'axios';
import responseTime from 'response-time';
import redis from 'redis';

const app = express();

app.use(morgan('dev'))//config para mostra msj por consola.
app.use(express.json());// para que convertir los req.body en un formato json
app.use(cookieParser());
//rutas
app.use('/api',authRoutes);
app.use('/api', taskRoutes);
//inicializacion
app.use(responseTime())
//peticion
const redisClient = redis.createClient({url:'redis://localhost:3000'});
redisClient.on('error',err=> console.log('Redis client errror',err))

//routes

// app.get('/with-redis',async(req,res)=>{
//     try{
//         const getResultRedis= await redisClient.get('rockets');
//         if(getResultRedis){
//             console.log('use cached data');
//             return res.json({data:JSON.parse(getResultRedis)});

//         }
//         const response = await axios.get ('http://random');
       
// })
app.get ('/without-redis', async (req, res) => {
    try {
    const response = await axios.get ('https://api.spacedata.com/v4/rockets');
    return res.json ({ data: response.data });
    } catch (error) {
    console. log(error);
    return res.status (500) .json ({ message: "Internal server error" });
    }
    });
    redisClient.connect ().then (() => {
        console. log ("Redis connected")
        app. listen (PORT, () => {
        console. log('server on port ${PORT}');
        });
     } );


export default app;