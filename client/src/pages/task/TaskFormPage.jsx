import { useForm } from "react-hook-form";
import { useTasks } from "../../context/taskContext";
import { useNavigate } from "react-router-dom";
function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    createTask(data);
    //una vez creada la tarea redirecciono.
    navigate('/tasks')
    
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
