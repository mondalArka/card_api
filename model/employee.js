let mongoose=require('mongoose')
let schema= mongoose.Schema

let employeemode= new  schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    }
})

let empModel=mongoose.model('employee',employeemode)
module.exports=empModel