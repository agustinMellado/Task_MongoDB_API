import Usuario from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { crearAccesoToken } from '../libs/jwt.js'

export const register = async (req, res) => {
    const { nombre, email, password } = req.body
    //genera un hash
    const passwordHash = await bcrypt.hash(password, 10);

    try {
        //creo un nuevo objeto
        const nuevoUsuario = new Usuario({
            nombre,
            email,
            password: passwordHash,//almaceno contrasena encriptada
        })
        const usuarioGuardado = await nuevoUsuario.save()//guardo el nuevo usuario
        //mando el id del usuario para volverlo token xd
        const token = await crearAccesoToken({ id: usuarioGuardado._id })
        res.cookie('token', token);//lo almaceno en una cookie
        res.json({
            id: usuarioGuardado._id,
            nombre: usuarioGuardado.nombre,
            email: usuarioGuardado.email,
            createdAt:usuarioGuardado.createdAt,
            updatedAt: usuarioGuardado.updatedAt
        })
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const login = (req, res) => { res.send('login') }


