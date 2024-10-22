import express from 'express'
import mongoose from 'mongoose'

const departmentScheman = new mongoose.Schema({
    dept_name:{
        type:String,
        required:[true, "Department Name is mandatory"],
        unique : true
    },
    description:{
        type:String,
        required:[true, "Department Description is mandatory"],
      
    },
    createdAt:{
        type:Date,
        default:Date.new
    },
    updatedAt:{
        type:Date,
        default:Date.new
    }
})

const departmentModel = mongoose.model("departments",departmentScheman)

export default departmentModel;