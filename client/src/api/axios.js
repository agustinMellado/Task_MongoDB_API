import axios from 'axios'

const instancia = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,//para que establesca las cookies
})

export default instancia