

import mongoose from 'mongoose'

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is mandatory"]
    },
    email:{
        type:String,        
        required:[true,"Email is mandatory"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Password is mandatory"]
    },
    role:{
        type:String,
        enum:["admin","user"],
        required:[true,"Role is mandatory"]
    },
    age:{
        type:Number,        
       
    },
    profileImage:{
        type:String,        
      
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



const registerModel = mongoose.model("users",registerSchema)

export default registerModel;