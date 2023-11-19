import axios from './axios';

// Creo peticiones que le pasamos un usuario 
export const registerRequest = (user)=> axios.post(`/register`, user)//enviamos un post a la direccion con el user asignado
export const loginRequest = (user)=> axios.post(`/login`,user)//enviamos un post a la direccion con el user asignado
//verifico existencia de token
export const verificarToken = ()=> axios.get('/auth/verify')