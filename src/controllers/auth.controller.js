import Usuario from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { crearAccesoToken } from '../libs/jwt.js'

export const register = async (req, res) => {
    const { nombre, email, password } = req.body


    try {

        //validamos la existencia del usuario
        const userFound = await User.findOne({ email });
        if (userFound) return res.status(400).json(['El email utilizado pertenece a un usuario existente.']);
        //genera un hash
        const passwordHash = await bcrypt.hash(password, 10);
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
            createdAt: usuarioGuardado.createdAt,
            updatedAt: usuarioGuardado.updatedAt
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;


    try {
        //busco si el usuario existe
        const usuarioExistente = await Usuario.findOne({ email })
        //si no lo encontro retornamos, si existe continuamos.
        if (!usuarioExistente) return res.status(400).json({ message: 'El usuario no se encontro' });
        //comparamos hash de contraseñas
        const coincidenPass = await bcrypt.compare(password, usuarioExistente.password)
        //si se encontro pero sus passwords no coinciden.
        if (!coincidenPass) return res.status(400).json({ message: 'Contraseña incorrecta' })

        //mando el id del usuario existente
        const token = await crearAccesoToken({ id: usuarioExistente._id })
        res.cookie('token', token);//lo almaceno en una cookie
        res.json({
            id: usuarioExistente._id,
            nombre: usuarioExistente.nombre,
            email: usuarioExistente.email,
            createdAt: usuarioExistente.createdAt,
            updatedAt: usuarioExistente.updatedAt
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const cerrarSesion = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
    });
    return res.sendStatus(200);
};
export const profile = async (req, res) => {
    const usuarioEncontrado = await Usuario.findById(req.user.id)//retorno toda la informacion perteneciente a ese usuario.
    //valido que no este vacio
    if (!usuarioEncontrado) return res.status(400).json({ message: "Usuario no encontrado." })

    return res.json({
        id: usuarioEncontrado._id,
        nombre: usuarioEncontrado.nombre,
        email: usuarioEncontrado.email,
        createdAt: usuarioEncontrado.createdAt,
        updatedAt: usuarioEncontrado.updatedAt
    })
}

