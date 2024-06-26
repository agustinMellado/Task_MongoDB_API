import mongoose from 'mongoose'

const usuarioSchema= new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true// limpia espacio vacios
    },
    email: {
        type: String, 
        required: true ,
        unique: true//cada email es unico, no pueden existir 2 iguales.
    },
    password: { 
        type: String, 
        required: true 
    },
},
{timestamps:true//para saber la fecha en la que se creo
})
//exportacion de modelo para generar una coleccion de objetos en la db
export default mongoose.model('Usuario', usuarioSchema)