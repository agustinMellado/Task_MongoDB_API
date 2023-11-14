export const validateSchema =(schema) => (req,res,next)=>{
    try{// valida los datos
        schema.parse(req.body);
        //si los valida correctqamente continuan
        next()
    }catch(error){//si falla
        return res.status(400).json({error: error.errors.map((error)=> error.message)});
    }
    
}