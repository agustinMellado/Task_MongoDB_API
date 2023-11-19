import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";

function ProtectedRoutes() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>Loading...</h1>; //condicional de carga
  //si el usuario no esta autenticado, lo redirijo.
  if (!loading && !isAuthenticated) return <Navigate to="login" replace />;

  return <Outlet />;
}

export default ProtectedRoutes;
