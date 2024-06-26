import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, errors: signInErrors, isAuthenticated } = useAuth();
  const navigate= useNavigate()
  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });
  //cambio de direccion si esta autenticado
  useEffect(() => {
    //si lo esta me redirige
    if(isAuthenticated) navigate('/tasks')
  },[isAuthenticated])

  return (
    <div className="flex h-[calc(90vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md text-center ">
        {signInErrors.map((error, i) => (
          <div className="bg-red-500 p-2 my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold">INICIAR SESION</h1>
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
        <p className="flex gap-x-2 justify-between">
          No tenes una cuenta aun? <Link to="/register" className="text-sky-500">Registrarse</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
