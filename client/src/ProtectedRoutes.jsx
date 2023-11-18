import {Navigate, Outlet} from 'react-router-dom'
import { useAuth } from './context/authContext'

function ProtectedRoutes() {
  const {user,isAuthenticated}= useAuth()

  //si el usuario no esta autenticado, lo redirijo.
  if(!isAuthenticated)return <Navigate to= 'login' replace/>
  return <Outlet/>

}

export default ProtectedRoutes