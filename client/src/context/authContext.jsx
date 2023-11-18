import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";
import { loginRequest } from "../api/auth";
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
  const [errors, setErrors] = useState([])



//funcion para registro
  const signUp = async (user) => {
    try {
      // Llama a la función registerRequest con el objeto de usuario como parámetro.
      const res = await registerRequest(user);
      // Establece el estado del usuario con los datos de la respuesta.
      setUser(res.data);
      // Cambia el estado de autenticación a true.
      setIsAuthenticated(true);
    } catch (error) {// Captura y maneja cualquier error que pueda ocurrir durante el registro.
      // console.log(error.response);
      setErrors(error.response.data)
    }
  };
//funcion para inicio de sesion
const signIn =async(user)=>{
  try{
    const res = await loginRequest(user);
    console.log(res)
  }catch (error){// Captura y maneja cualquier error que pueda ocurrir durante el registro.
    setErrors(error.response.data)

  }
}
  return (
    //permite compartir los valores a todos los componentes
    <AuthContext.Provider
      value={{
        // estos valores pueden ser llamados
        signUp,
        signIn,
        user,
        isAuthenticated,
        errors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
