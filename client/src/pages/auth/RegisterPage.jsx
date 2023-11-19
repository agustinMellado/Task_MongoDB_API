import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  //almaceno la informacion de los objetos
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });
  // redirigir al usuario cuando el estado de autenticación se vuelve verdadero.
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks"); //si es true, redirijo.
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md text-center ">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 my-2" key={i}>
            {error}
          </div>
        ))}
         <h1 className="text-2xl font-bold">REGISTRARSE</h1>
        {/* formulario */}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("nombre", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Ingrese su nombre"
          />
          {errors.nombre && (
            <p className="text-red-500">Este campo es requerido</p>
          )}
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
          <button type="submit">Registrar</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Ya tenes una cuenta? <Link to="/login" className="text-sky-500">Iniciar Sesion</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
