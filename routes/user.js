 //desestructurar express
 const{Router}=require('express');
 const {check}=require("express-validator")
const { userGet, userPut, userPost, userDelete } = require('../controllers/user');
const { esRolValido } = require('../helpers/db-validators');


 const router=Router();

router.get('/', userGet
      );
router.post('/',[
      check('correo','correo no es válido').isEmail(),
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
router.put('/:id', userPut 
      );
router.delete('/', userDelete
);
    
    module.exports=router;