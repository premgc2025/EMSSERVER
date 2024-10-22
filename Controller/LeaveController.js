import employeeModel from "../Model/EmployeeModel.js"
import leaveModel from "../Model/leaveModel.js"
import moment from 'moment'



const AddLeaveController =async (req,res)=>{

    try{   
    const {
        userId,
        typeofleave,
        startdate,
        enddate,
        description

    } = req.body
        let userData
   
        userData = await employeeModel.findOne({userId:userId})
        if(!userData){
            res.status(404).send({success:false, message:"Employee ID not Found"})
        }
        const leaveData = {
            userId,
            employeeId:userData._id,
            typeofleave,
            startdate,
            enddate,
            description,
            
           
        }

        const newLeaveData = await leaveModel.create(leaveData)
    res.status(200).send({success:true, message:"Successfully Added Leave"})
}
catch (error) {
    console.log("err",error, error.message)
     
res.status(403).send({success:false , error:error.message, })

}

}

// Get Leave Data for Single User

const getSingleUserLeaveController= async(req,res)=>
{
   try{

    const {id} = req.params
 
    let getLeaveData;
    let empData;
    empData = await leaveModel.findOne({userId:id})
 
    if(!empData){
        getLeaveData = await leaveModel.find({employeeId:id}).populate("userId",{password:0}).populate("employeeId")
             
    }
    else{
        getLeaveData = await leaveModel.find({userId:id}).populate("userId",{password:0}).populate("employeeId")

    }
  
    res.status(200).send({success:true, getLeaveData})

   }
   catch (error) {
    console.log("err",error, error.message)
     
res.status(403).send({success:false , error:error.message, })

}

}

// Get All Leave 
const getLeaveController = async(req,res)=>{
    try{

      
        const getLeaveData = await leaveModel.find().populate("userId",{password:0}).populate("employeeId")
    
        res.status(200).send({success:true, getLeaveData})
    
       }
       catch (error) {
        console.log("err",error, error.message)
         
    res.status(403).send({success:false , error:error.message, })
    
    }


}

const getLeaveDetailController = async(req,res)=>{

    try{

        const {id} = req.params
     
       
       const leaveData = await leaveModel.findOne({_id:id}).populate({
        path:"employeeId",
        populate:
        [
        {
            path:"userId",
            select:"profileImage name "
        },
        {
            path:"departmentId",
            select:"dept_name"
        }
       ]
    })
     
        res.status(200).send({success:true, leaveData})
    
       }
       catch (error) {
        console.log("err",error, error.message)
         
    res.status(403).send({success:false , error:error.message, getLeaveDetailController})
    
    }


}

// Update Leave Status

const UpdateLeaveController =async (req,res)=>{
    const {id} = req.params
    const {update} = req.body
 
    try{
       
 
       const leaveUpdateData = await leaveModel.findByIdAndUpdate({_id:id}, {status:update})
     
      
        res.status(200).send({success:true, message:"Successfully Updated"})
    
       }
       catch (error) {
        console.log("err",error, error.message)
         
    res.status(403).send({success:false , error:error.message, })
    
    }

    

}


export {AddLeaveController, getSingleUserLeaveController,getLeaveController, getLeaveDetailController,UpdateLeaveController}