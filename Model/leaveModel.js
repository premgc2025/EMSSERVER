


import mongoose, { Mongoose } from 'mongoose'
//Imp Note:- use Double "" for ref Properties,
const leaveSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users" , 
        required:[true,"EmployeeId is mandatory"]
    },  
    employeeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"employees" , 
        required:[true,"EmployeeId is mandatory"]
    },  
   typeofleave:{
    type:String,
    required:[true,"Type of Leave Required"]
   },
    startdate:{
        type:Date,
        default:Date.now,  
            
       
    },
    enddate:{
        type:Date,
        default:Date.now,  
             
       
    },
    applydate:{
        type:Date,
        default:Date.now,       
       
    }, 
    description:{
        type:String,

    } , 
    status:{
        type:String,
        enum:["Pending", "Approve","Reject"],
        default:"Pending"

    } , 
   
    createAt:{
        type:Date,
        default:Date.now,        
     
    },
    updateAt:{
        type:Date,
        default:Date.now,        
    
    }
  
})



const leaveModel = mongoose.model("leaves",leaveSchema)


export default leaveModel;