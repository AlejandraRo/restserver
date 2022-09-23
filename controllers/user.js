//ponemos la parte de las rutas
 //desestructurar express
 const {request,response}=require('express')
 const Usuario=require('../models/user')
 const bcryptjs=require('bcryptjs')

 //enviando querys
 //localhost:8082/api/usuario?q=hola&nombre=mario&pkey=123
const userGet=(req, res) => {
    const query=req.query
    res.json({
        msj:'Hello World!',
        query});
        
    }
   
const userPost=async(req, res) => {

    //obteniendo información
    //const body=req.body;
    //reestructurar body
    const {nombre,correo,contraseña,rol}=req.body
    //const usuario=new Usuario(body);
    const usuario=new Usuario({nombre,correo,contraseña,rol});
//verificar si el correo existe
    const correoExiste=await Usuario.findOne({correo})
    if(correoExiste){
        return res.status(400).json({
            "msj":"Este email ya está registrado"
        })
    }
    
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
const userPut=(req, res) => {
    //tomar un parametro de la dirección url
    const id=req.params
    res.json({
        "msj":"Te hablo del put",
        id});
    }
const userDelete=(req, res) => {
    res.json({
        "msj":"Te hablo del delete"});
    }

module.exports={userGet,userPost,userPut, userDelete}