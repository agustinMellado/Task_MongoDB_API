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
    await newTask.save()
};
export const getTask= async(req, res)=>{};
export const updateTask= async(req, res)=>{};
export const deleteTask= async(req, res)=>{};

