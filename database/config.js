const moongose=require("mongoose")


const dbConnection=async()=>{
    try{
            await moongose.connect(process.env.MONGO_CNN,{
                
            })
            console.log("Conexión exitosa");
    }
    catch (error){
        console.log("error al iniciar la bd", error)
        throw new Error("Error al iniciar la bd")
    }

}
module.exports={
    dbConnection
}