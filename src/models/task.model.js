import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default:Date.now
    },
    user:{

        //hago una referencia a la coleccion usuario tomando el id especifico.
        type:mongoose.Schema.Types.ObjectId,
        ref:'Usuario',
        require:true//el usuario tienen que ser si o si requerido
    }
},{
    timestamps:true
})

export default mongoose.model('Tarea', taskSchema)