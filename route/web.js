let express=require('express')
let route=express.Router();
let controller=require('../controller/user')
route.post('/add',controller.addemp)
route.post('/update/:id',controller.update)
route.get('/edit/:id',controller.edit)
route.get('/getdata',controller.getData)
route.delete('/deleteemployee/:id', controller.deleteUser)

module.exports=route