import express from 'express'
import registerModel from '../Model/RegisterModel.js'

function userDeleteController(req,res){

    console.log("delete User",req.body)
    res.send("this is user delete component")

}

export default userDeleteController;