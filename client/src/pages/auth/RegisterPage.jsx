import { useForm } from "react-hook-form";
import { registerRequest } from "../../api/auth";
function RegisterPage() {
  //almaceno la informacion de los 2 objetos
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
   
  });
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {/* formulario */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("nombre", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
          placeholder="Ingrese su nombre"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
          placeholder="Ingrese su email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
          placeholder="Ingrese su contraseña"
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;
