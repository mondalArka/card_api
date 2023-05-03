let emp = require('../model/employee')

let addemp = async (req, res) => {

    try {
        let {name,email}=req.body
        let checkname=await emp.findOne({name})
        if(checkname){
           return res.status(404).json({success:false,msg:"name already exist"})
        }
        let checkemail=await emp.findOne({email})
        if(checkemail){
           return res.status(404).json({success:false,msg:"email already exist"})
        }
        let addemployee = await new emp({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            designation: req.body.designation,
            salary: req.body.salary


        })
        let Result=await addemployee.save()
        res.status(201).json({ success: true, msg: "data  saved", data:Result })
    } catch (ex) {
        res.status(404).json({ success: false, msg: "data not saved" })
    }
}

let getData = async (req, res) => {
    try{
        let getda= await  emp.find();
        res.status(200).json({success:true,msg:"data fetched",data:getda})
    }catch(ex){
        res.status(404).json({success:false,msg:"data not fetched"})
    }
    
}

let edit=async(req,res)=>{
    try{
        let edId=req.params.id
        let editdata=await emp.findByIdAndUpdate(edId)
        res.status(206).json({success:true,msg:"data edited",data:editdata})
    }catch(ex){
        res.status(404).json({success:false,msg:"data not edited"})
    }
   
}
let update=async(req,res)=>{
    try{
        let id=req.params.id
        let updateData=await emp.findByIdAndUpdate(id,req.body)
        res.status(200).json({success:true,msg:"data  update"})
    }catch(ex){
        res.status(404).json({success:false,msg:"data not update"})
    }
  
}
const deleteUser = async (req, res) => {
    const id = req.params.id;
      try {
        const AllData=await Employee.findByIdAndDelete(id);
        res.status(206).json({success: true, msg: "User Deleted Succesfully", data: AllData });
      } catch (error) {
        res.status(500).json({ success: false, msg: "User Not Deleted" });
      }
    }
module.exports = { addemp, getData,deleteUser,edit,update }