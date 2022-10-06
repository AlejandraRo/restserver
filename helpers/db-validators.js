const Role=require('../models/role')
const Usuario=require('../models/user')
const esRolValido=async(rol='')=>{
    const existeRol=await Role.findOne({rol})
    if(!existeRol){
          throw new Error(`El rol ${rol} no está en la base de datos`)
    }
}

const correoExis=async(correo='')=>{
    const correoExiste=await Usuario.findOne({correo})
    if(correoExiste){
        // return res.status(400).json({
        //     "msj":"Este email ya está registrado"
        // })
        throw new Error(`El correo ${correo} ya está en la base de datos`)
    }
    
}
const existeUsuId=async(id)=>{
    const usuarioExiste=await Usuario.findById(id)
    if(!usuarioExiste){
        throw new Error(`El id ${id} no existe en la base de datos`)
    }
}

module.exports={esRolValido,correoExis,existeUsuId}