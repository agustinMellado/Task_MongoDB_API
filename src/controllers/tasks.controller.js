import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find()//tomo todas las tareas
    res.json(tasks)
};
export const createTask = async (req, res) => {
    //tomo los valores del front
    const { title, description, date } = req.body;
    //Creo el objeto nuevo 
    const newTask = new Task({
        title,
        description,
        date
    })
    //la guardo en la bd
    const tareaGuardada = await newTask.save();
    res.json(tareaGuardada)
};
export const getTask = async (req, res) => {
    //busco por id la tarea, tomado del req.
    const task = await Task.findById(req.params.id);
    //verifico que exista
    if (!task) return res.status(404).json({ messege: 'Tarea no encontrada' })
    //muestro la tarea
    res.json(task)
};
export const deleteTask = async (req, res) => {
    //busco por id la tarea, y la elimino
    const task = await Task.findByIdAndDelete(req.params.id);
    //verifico que exista, sino ...
    if (!task) return res.status(404).json({ messege: 'Tarea no encontrada' })
    //muestro la tarea
    res.json(task)
};
export const updateTask = async (req, res) => {
    //busco por id la tarea, y la actualizo
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true//Funcion para que al actualizar muestre el ultimo valor modificado
    });
    //verifico que exista
    if (!task) return res.status(404).json({ messege: 'Tarea no encontrada' })
    //muestro la tarea
    res.json(task)
};


