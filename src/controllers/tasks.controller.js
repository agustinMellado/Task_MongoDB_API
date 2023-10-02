import Task from "../models/task.model";

export const getTasks= async(req, res)=>{
    const tasks = await Task.find()
};
export const createTask= async(req, res)=>{
    //tomo los valores del front
    const {title,description,date}=req.body;
    //Creo el objeto nuevo 
    const newTask= new Task({
        title,
        description, 
        date
    })
    //la guardo en la bd
    const tareaGuardada= await newTask.save();
    res.json(tareaGuardada)
};
export const getTask= async(req, res)=>{
    //busco por id la tarea, tomado del req.
    const task= await Task.findById(req.params.id);
    //verifico que exista
    if(!task) return res.status(404).json({messege:'Tarea no encontrada'})
    //muestro la tarea
    res.json(task)
};
export const updateTask= async(req, res)=>{};
export const deleteTask= async(req, res)=>{};

