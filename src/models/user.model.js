import mongoose from 'mongoose'

const usuarioSchema=mongoose.Schema({
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
})
//exportacion de modelo para generar una coleccion de objetos en la db
export default mongoose.model('Usuario', usuarioSchema)