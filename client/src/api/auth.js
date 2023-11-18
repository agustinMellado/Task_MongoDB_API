import axios from 'axios'

const API = 'http://localhost:3000/api'
// Creo un registerRequest que le pasamos un usuario 
export const registerRequest = (user)=> axios.post(`${API}/register`, user)//enviamos un post a la direccion con el user asignado
export const loginRequest = (user)=> axios.post(`${API}/login`,user)//enviamos un post a la direccion con el user asignado