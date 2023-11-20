import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Navbar() {
  const { isAuthenticated,logOut,user } = useAuth();
  console.log(user)
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/home">
        <h1 className="text-2xl font-bold">TAREAS MDB</h1>
      </Link>
      <ul className="flex gap-x-4">
        {isAuthenticated ? (//si esta auth muestra esto
        //contenido dentro de un fragmento
          <>
            <li>Bienvenido {user.nombre}</li>
            <li>
              <Link to="/add-task">Añadir Tareas</Link>
            </li>
            <li>
              <Link className="bg-red-600 rounded-lg  px-4 py-1" to="/"
              onClick={() => logOut()}
              >Cerrar Sesion</Link>
            </li>
          </>
        ) : (//sino esto
        //contenido dentro de un fragmento
          <>
            <li>
              <Link to="/login">Iniciar Sesion</Link>
            </li>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
