//ponemos la parte de las rutas
 //desestructurar express
 const {request,response}=require('express')
 const Usuario=require('../models/user')
 const bcryptjs=require('bcryptjs')
const { validate } = require('../models/user')
const { validationResult } = require('express-validator')

 //enviando querys
 //localhost:8082/api/usuario?q=hola&nombre=mario&pkey=123
const userGet=async(req, res) => {
    
    //si queremos con límite enviamos usuario?limite=2&rango=3
    //const query=req.query
    //destructuramos para recibir el límite
    //{estado:true} para obtener solo los true
    const {limite,rango}=req.query;
    //para optimizar la respuesta del código se usa
    const respuesta=await Promise.all([

    Usuario.countDocuments({estado:true}),
    Usuario.find({estado:true})
                   .limit(Number(limite))
                   .skip(Number(rango))    
       
    ]);
    res.json({
        msj:'Hello World!',
        res
        // usuarios,
        // totalusu
    // const usuarios=await Usuario.find({estado:true})
    //                .limit(Number(limite))
    //                .skip(Number(rango))
    // const totalusu=await Usuario.countDocuments({estado:true})
    // res.json({
    //     msj:'Hello World!',
    //     usuarios,
    //     totalusu
    // });       
    }
    )
}
const userPost=async(req, res) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    //obteniendo información
    //const body=req.body;
    //reestructurar body
    const {nombre,correo,contraseña,rol}=req.body
    //const usuario=new Usuario(body);
    const usuario=new Usuario({nombre,correo,contraseña,rol});
    
//verificar si el correo existe
    // const correoExiste=await Usuario.findOne({correo})
    // if(correoExiste){
    //     return res.status(400).json({
    //         "msj":"Este email ya está registrado"
    //     })
    // }
    
//encriptar la contraseña, el (es para configurar el nivel)
    const salt=bcryptjs.genSaltSync()
    usuario.contraseña=bcryptjs.hashSync(contraseña,salt)
//guardar en bd

    //guarda los datos del usuario
    await usuario.save();
    res.json({
        "msj":"Te hablo del post",
        usuario
    })
     
    }
const userPut=async(req, res) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    //tomar un parametro de la dirección url
    const id=req.params
    const {contraseña,google,correo,...resto}=req.body
    //encriptar contraseña
    if(contraseña)
    {
    const salt=bcryptjs.genSaltSync()
    resto.contraseña=bcryptjs.hashSync(contraseña,salt)
    }
    const usuario=await Usuario.findOneAndUpdate(id,resto,{new:true})
    res.json({
        "msj":"Te hablo del put",
        id,
        usuario});
    }
const userDelete=(req, res) => {
   // se usa para borrar, pero lo mejor es ocultarlos que eliminarlos de la base de datos
   //const usuario=await Usuario.findByIdandDelete
    res.json({
        "msj":"Te hablo del delete"});
    }

module.exports={userGet,userPost,userPut, userDelete}