import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";
export const authRequired = (req, res, next) => {
    try {
        //tomo el token de los cookies
        const { token } = req.cookies;
        //Compruebo si se tomo un token y no algo vacio
        if (!token)
            return res
                .status(401)
                .json({ message: "No token, authorization denied" });

        //verifico que el token extraido sea valido
        jwt.verify(token, TOKEN_SECRET, (error, user) => { // codificar en un .env el token_secreto xd 
            if (error) {
                return res.status(401).json({ message: "Token is not valid" });
            }
            //Tomo toda la informacion del usuario que estamos decodificando.
            req.user = user;
            next()
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }


}