import jwt from 'jsonwebtoken'
export const authRequired =(req,res,next) => {
    //tomo el token de los cookies
    const {token} = req.cookies;
    //Compruebo si se tomo un token y no algo vacio
    if(!token) return res.status(401).json({message: 'token no autorizado'})
   
    //verifico que el token extraido sea valido
    jwt.verify(token,'fraseparageneraruntoken123', (err,user) => { // codificar en un .env el token_secreto xd 
        if(err) return res.status(403).json({message: "token invalido"})
        //Tomo toda la informacion del usuario que estamos decodificando.
        req.user= user;
        next()
    })

   
}