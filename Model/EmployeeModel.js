

import mongoose, { Mongoose } from 'mongoose'
//Imp Note:- use Double "" for ref Properties,
const employeeSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users" , 
        required:[true,"UserId is mandatory"]
    },
    departmentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"departments",
        required:[true,"Deparment ID is mandatory"],
        
    },
    employeeId:{
        type:String,
        required:[true,"Password is mandatory"],
        unique:true
    },
    dob:{
        type:Date,      
        required:[true,"DOB is mandatory"]
    },
    gender:{
        type:String,       
        required:[true,"Gender is mandatory"]
    },
    maritalstatus:{
        type:String,       
        required:[true,"Marital Status is mandatory"]
    },
    designation:{
        type:String,       
        required:[true,"Designation is mandatory"]
    },
    salary:{
        type:Number,        
        required:[true,"Salary is mandatory"]
    },
   
    createAt:{
        type:Date,
        default:Date.new,        
     
    },
    updateAt:{
        type:Date,
        default:Date.new,        
    
    }
  
})



const employeeModel = mongoose.model("employees",employeeSchema)


export default employeeModel;