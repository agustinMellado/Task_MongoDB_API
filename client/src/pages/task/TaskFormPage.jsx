import { useForm } from "react-hook-form";
import { useTasks } from "../../context/taskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
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
      updateTask(params.id, data);
    } else {
      //si esta creando
      createTask(data);
    } //una vez creada o editada la tarea redirecciono.
    navigate("/tasks");
  });
  return (
    <div className="bg-zinc-800 max-w-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="titulo"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
