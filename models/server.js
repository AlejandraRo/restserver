const express = require('express')
const cors=require('cors');
const { dbConnection } = require('../database/config');
class Server{
    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.usuarioPath='/api/usuario';
        this.conectarBD()
        this.middleware();

        this.routes();
        
    }
    //método para gestionar las rutas
    routes(){
        this.app.use(this.usuarioPath,require('../routes/user'));
          };

    
    middleware(){

        this.app.use(cors())
        this.app.use(express.static('public'))
        //recibir información del backend del body
        this.app.use(express.json())
    }
    //copiamos lo relacionado al puerto
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
          
    }
    async conectarBD(){
        await dbConnection()
    }
}

module.exports=Server;

