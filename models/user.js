const {Schema,model}=require("mongoose")

const usuarioSchema=Schema({
    nombre:{
        type:String,
        required:[true,"es obligatorio"]
    },
    correo:{
        type:String,
        required:[true,"introduzca su correo"],
        unique:true
    },
    contraseña:{
        type:String,
        required:[true,"la contraseña es obligatoria"]
    },
    estado:{
        type:Boolean,
        required:false
    },
    rol:{
        type:String,
        required:[true,"es obligatorio"],
        enum:['ADMIN','USER']
    },
    google:{
        type:Boolean,
        default:false
    },
})


module.exports=model('Usuario',usuarioSchema)