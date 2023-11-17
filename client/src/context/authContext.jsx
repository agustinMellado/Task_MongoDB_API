import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("userAuth must be used within an authProvider");
  }
  return context
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (user) => {
    const res = await registerRequest(values);
    console.log(res);
    setUser(res.data);
  };
  return (
    //permite compartir los valores a todos los componentes
    <AuthContext.Provider
      value={{
        // estos valores pueden ser llamados
        signup,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
