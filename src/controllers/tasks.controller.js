import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
   try {
     //me muestas todas las tareas
     const tasks = await Task.find(
        { user: req.user.id }//del usuario correspondiente
    ).populate("user")//funcion para que me de todos los datos del usuario
    res.json(tasks)
   } catch (error) {
    
    return res.status(500).json({message:'Algo salio mal'})
   }
};
export const createTask = async (req, res) => {
    try {
           //tomo los valores del front
    const { title, description, date } = req.body;
    //Creo el objeto nuevo 
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id//tomo el id del usuario creado.
    })
    //la guardo en la bd
    const tareaGuardada = await newTask.save();
    res.json(tareaGuardada)
    } catch (error) {
        return res.status(500).json({message:'Algo salio mal'})
        
    }
};
export const getTask = async (req, res) => {
    try {//busco por id la tarea, tomado del req.
        const task = await Task.findById(req.params.id).populate('user');
        //verifico que exista
        if (!task) return res.status(404).json({ messege: 'Tarea no encontrada' })
        //muestro la tarea
        res.json(task)
    } catch (error) {
        return res.status(404).json({ messege: 'Tarea no encontrada' })
    }

};
export const deleteTask = async (req, res) => {

    try {
        //busco por id la tarea, y la elimino
        const task = await Task.findByIdAndDelete(req.params.id);
        //verifico que exista, sino ...
        if (!task) return res.status(404).json({ messege: 'Tarea no encontrada' })

        //retorno un codigo de estado para confirmar que la tarea se elimino
        return res.sendStatus(204)
    } catch (error) {
        return res.status(404).json({ messege: 'Tarea no encontrada' })

    }

};
export const updateTask = async (req, res) => {
    try {
        //busco por id la tarea, y la actualizo
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true//Funcion para que al actualizar muestre el ultimo valor modificado
        });
        //verifico que exista
        if (!task) return res.status(404).json({ messege: 'Tarea no encontrada' })
        //muestro la tarea
        res.json(task)
    } catch (error) {
        return res.status(404).json({ messege: 'Tarea no encontrada' })


    }
};


