 //desestructurar express
 const{Router}=require('express');
const { userGet, userPut, userPost, userDelete } = require('../controllers/user');

 const router=Router();

router.get('/', userGet
      );
router.post('/', userPost
      );
      //mandar parametro y editamos controller
router.put('/:id', userPut 
      );
router.delete('/', userDelete
);
    
    module.exports=router;