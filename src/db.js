import mongoose from "mongoose"
import { MONGODB_URI } from "./config.js"
//exporto la conexion a la db
export const conexionDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('/------///-----/conexion establecida/------///-----/')
    }catch (error){
        console.log(error);
    }
}