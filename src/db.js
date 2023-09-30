import mongoose from "mongoose"
//exporto la conexion a la db
export const conexionDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost/merndb');
        console.log('////////////conexion establecida////////////')
    }catch (error){
        console.log(error);
    }
}