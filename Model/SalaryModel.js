

import mongoose, { Mongoose } from 'mongoose'
//Imp Note:- use Double "" for ref Properties,
const salarySchema = new mongoose.Schema({
    employeeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"employees" , 
        required:[true,"EmployeeId is mandatory"]
    },
    departmentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"departments",
        required:[true,"Deparment ID is mandatory"],
        
    },
    basicsalary:{
        type:Number,
        required:[true,"Basic Salary is mandatory"],
       
    },
    allowance:{
        type:Number,
        required:[true,"Allowance is mandatory"],
    },
    deduction:{
        type:Number,
        required:[true,"Deduction is mandatory"],
    },
    netsalary:{
        type:Number,
        // required:[true,"Net Salary is mandatory"],
    },
    paydata:{
        type:Date,
        default:Date.now,       
       
    },   
   
    createAt:{
        type:Date,
        default:Date.now,        
     
    },
    updateAt:{
        type:Date,
        default:Date.now,        
    
    }
  
})



const salaryModel = mongoose.model("salarys",salarySchema)


export default salaryModel;