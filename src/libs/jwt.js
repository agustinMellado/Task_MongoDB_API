export function crearAccesoToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            'fraseparageneraruntoken123',
            {
                expiresIn: '1d',//duracion 1 dia
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            });
    });

}