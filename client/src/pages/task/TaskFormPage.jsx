import { useForm } from "react-hook-form";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="bg-zinc-800 max-w-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="titulo"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          autoFocus
        />
        <textarea
          rows="10"
          placeholder="Descripcion"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
