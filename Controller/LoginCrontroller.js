
import express from 'express'
import jwt from 'jsonwebtoken'
import registerModel from '../Model/RegisterModel.js'
import bcrypt from 'bcrypt'

const loginController = async (req, res) => {

    const loginDetail = req.body

  
  
    try {
        const loginData = await registerModel.findOne({email:loginDetail.email })
        if (loginData !== null) {
            bcrypt.compare(loginDetail.password, loginData.password, (err, success) => {
                if (success === true) {
                    jwt.sign(loginDetail.email, process.env.seckey, (err, token) => {
                        if (!err) {
                            res.status(200).send({success:true, message:"Successfully Created JWT", token, name:loginData.name,id:loginData._id,role:loginData.role})
                        }
                        else {
                            res.status(401).send({success:false, error:"JWT error"})
        
                        }
                    })
                }
                else {
                    res.status(401).send({success:false, error:"Wrong password"})

                }
            })
        }
        else {
            res.status(401).send({success:false, error:"Wrong Email"})

        }
    }
    catch (err) {
        res.status(500).send(err)
    }

}

export default loginController;