import Usuario from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

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

        jwt.sign(
            {
                id: usuarioGuardado._id,
            },
            'fraseparageneraruntoken123',
            {
                expiresIn: '1d',//duracion 1 dia
            },
            (err, token) => {
                if (err) console.log(err);
                res.cookie('token', token);//lo almaceno en una cookie
                res.json({
                    message: 'usuario creado satisfactoriamente'
                })
            })
        // res.json({
        //     id: nuevoUsuario._id,
        //     nombre: nuevoUsuario.nombre,
        //     email: nuevoUsuario.email,
        //     createdAt: nuevoUsuario.createdAt,
        //     updatedAt: nuevoUsuario.updatedAt

        // })
    } catch (error) {
        console.log(error)
    }
}
export const login = (req, res) => { res.send('login') }


