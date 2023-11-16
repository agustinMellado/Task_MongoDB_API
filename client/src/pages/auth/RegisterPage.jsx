import { useForm } from "react-hook-form";
function RegisterPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div class="bg-zinc-800 max-w-md p-10 rounded-md">
      {/* formulario */}
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
      >
        <input type="text" {...register("username", { required: true })} 
          class="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"/>
        <input type="text" {...register("email", { required: true })} />
        <input type="text" {...register("password", { required: true })} />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;
