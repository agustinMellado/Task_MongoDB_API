import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {/* formulario */}
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Ingrese su email"
          />
          {errors.email && (
            <p className="text-red-500">Este campo es requerido</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Ingrese su contraseña"
          />
          {errors.password && (
            <p className="text-red-500">Este campo es requerido</p>
          )}
          <button type="submit">Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
