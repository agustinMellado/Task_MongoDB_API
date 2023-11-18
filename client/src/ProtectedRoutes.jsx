import { Navagate} from 'react-router-dom'
import { useAuth } from './context/authContext'

export default function ProtectedRoutes() {

  const {use,isAuthenticated}= useAuth();

  //si el usuario no esta autenticado, lo redirijo.
  if(!isAuthenticated)return <Navagate to= 'login' replace/>
  return (
    <div>ProtecRoutes</div>
  )
}
