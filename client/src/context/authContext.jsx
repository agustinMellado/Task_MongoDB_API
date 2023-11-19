import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, verificarToken } from "../api/auth";
import { loginRequest } from "../api/auth";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("userAuth must be used within an authProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  //estados
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); //toma los valores de autentificacion de user
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  //funcion para registro
  const signUp = async (user) => {
    try {
      // Llama a la función registerRequest con el objeto de usuario como parámetro.
      const res = await registerRequest(user);
      // Establece el estado del usuario con los datos de la respuesta.
      setUser(res.data);
      // Cambia el estado de autenticación a true.
      setIsAuthenticated(true);
    } catch (error) {
      // Captura y maneja cualquier error que pueda ocurrir durante el registro.
      // console.log(error.response);
      setErrors(error.response.data);
    }
  };
  //funcion para inicio de sesion
  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);

      // Cambia el estado de autenticación a true.
      setIsAuthenticated(true);
      // Establece el estado del usuario con los datos de la respuesta.
      setUser(res.data);
    } catch (error) {
      // Captura y maneja cualquier error que pueda ocurrir durante el registro.
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  //contador para hacer desaparecer los msj de error
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        //tiempo que va a mostrar el error
        setErrors([]); //le seteo un arreglo vacio nuevamente
      }, 5000);
      return () => clearTimeout(timer); //destruyo el timer para que no consuma recursos
    }
  }, [errors]);
  //lector de cookies
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      //compruebo si no hay un token
      if (!cookies.token) {
        setIsAuthenticated(false);//auth en false
        setLoading(false);//No esta cargando
        return setUser(null); //retorno usuario en null
      }
      //si existe
      try {
        //primero lo verifico
        const res = await verificarToken(cookies.token);//tomo el token y lo verifico en el backend
        if (!res.data) {//si no existe, seteo los valores en false.
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        //Si encuentra el token, 
        setIsAuthenticated(true);//Auth ok
        setUser(res.data);// muestra el usuario y guarda en el estado
        setLoading(false);//termino de cargar
      } catch (error) {//Si hay error
        setIsAuthenticated(false);//auth denegada
        setUser(null); //usuario nulo
        setLoading(false);// no carga nada.
      }
    }
    checkLogin()
  },[]);



  return (
    //permite compartir los valores a todos los componentes
    <AuthContext.Provider
      value={{
        // estos valores pueden ser llamados
        signUp,
        signIn,
        loading,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
