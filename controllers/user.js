//ponemos la parte de las rutas
 //desestructurar express
 const {response}=require('express')

 //enviando querys
 //localhost:8082/api/usuario?q=hola&nombre=mario&pkey=123
const userGet=(req, res) => {
    const query=req.query
    res.json({
        msj:'Hello World!',
        query});
        
    }
   
const userPost=(req, res) => {
    //obteniendo información
    const body=req.body;
    res.json({
        "msj":"Te hablo del post",
        body
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