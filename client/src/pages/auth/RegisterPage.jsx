import { useForm } from "react-hook-form";
function RegisterPage() {
  //almaceno la informacion de los 2 objetos
  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {/* formulario */}
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
      >
        <input type="text" {...register("username", { required: true })} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
          placeholder="Ingrese su nombre"/>
        <input type="text" {...register("email", { required: true })} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
          placeholder="Ingrese su email"/>
        <input type="text" {...register("password", { required: true })} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
          placeholder="Ingrese su contraseña"/>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;
