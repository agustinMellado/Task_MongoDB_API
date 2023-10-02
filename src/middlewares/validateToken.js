
export const authRequired =(req,res,next) => {
    //tomo el token de los cookies
    const {token} = req.cookies;
    //valido token
    if(!token) return res.status(401).json({message: 'token no autorizado'})
    next()
}