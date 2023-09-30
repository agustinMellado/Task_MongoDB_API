import Usuario from "../models/user.model.js"


export const register = async (req, res) => {
    const { nombre, email, password } = req.body
    try {
        //creo un nuevo objeto
        const nuevoUsuario = new Usuario({
            nombre,
            email,
            password
        })
        await nuevoUsuario.save()//guardo el nuevo usuario

    } catch (error) {
        console.log(error)
    }
    res.send("registrando")
}
export const login = (req, res) => { res.send('login') }


