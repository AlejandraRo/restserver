require('dotenv').config()//siempre va de primera
//llamamos al servidor
const Server=require('./models/server')

const server=new Server();
//lanzamos el listen
server.listen();






