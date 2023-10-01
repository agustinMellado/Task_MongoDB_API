import Usuario from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
    const { nombre, email, password } = req.body
    //genera un hash
    const passwordHash = await bcrypt.hash(password,10);
    
    try {
        //creo un nuevo objeto
        const nuevoUsuario = new Usuario({
            nombre,
            email,
            password:passwordHash//almaceno contrasena encriptada
        })
        await nuevoUsuario.save()//guardo el nuevo usuario

    } catch (error) {
        console.log(error)
    }
    res.send("registrando")
}
export const login = (req, res) => { res.send('login') }


