import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
export function crearAccesoToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, TOKEN_SECRET,
            {
                expiresIn: '1d',//duracion 1 dia
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            });
    });

}