 //desestructurar express
 const{Router}=require('express');
 const {check}=require("express-validator")
const { userGet, userPut, userPost, userDelete } = require('../controllers/user');
const { esRolValido, correoExis, existeUsuId } = require('../helpers/db-validators');


 const router=Router();

router.get('/', userGet
      );
router.post('/',[
      //check('correo','correo no es válido').isEmail(),
      check('correo').custom(correoExis),
      check('contraseña','el password debe contener mínimo 6 caractéres').isLength({min:6}),
      check('nombre','el nombre es obligatorio').not().isEmpty(),
      //lo comentamos porque gestionaremos con el modelo.
      //check('rol','Rol inválido').isIn(['ADMIN','USER'])
      //personalizamos la función
      check('rol').custom(esRolValido)
],
       userPost
      );
      //mandar parametro y editamos controller
router.put('/:id',[
      //verificar si el id es válido
      //check('id','No es un id válido').isMongoId(),
      check('id').custom(existeUsuId),
      check('rol').custom(esRolValido),
      check('correo').custom(correoExis)
], userPut 
      );
router.delete('/', userDelete
);
    
    module.exports=router;