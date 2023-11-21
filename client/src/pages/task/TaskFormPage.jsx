import { useForm } from "react-hook-form";
import { useTasks } from "../../context/taskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    //verifico si esta editando o creando
    if (params.id) {
      //si esta editando
    updateTask(params.id,{
      ...data,
      date:dayjs.utc(date.date).format()//le doy nuevo formato a la fecha
    });
    } else {
      //si esta creando
      createTask({
        ...data,
        date:dayjs.utc(date.date).format()//le doy nuevo formato a la fecha
      });
    } //una vez creada o editada la tarea redirecciono.
    navigate("/tasks");
  });
  return (
    <div className="bg-zinc-800 max-w-md">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          placeholder="titulo"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <label htmlFor="description">Descripcion</label>
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <label htmlFor="date">Fecha</label>
        <input type="date" {...register("date")}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <button className="w-full bg-indigo-500 px-3 py-2 rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
