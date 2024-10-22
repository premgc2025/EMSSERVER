import express from 'express'
import jwt from 'jsonwebtoken'

function verifyToken(req,res,next){
    
    try{

        if(req.headers!==undefined){
            const token = req.headers.authorization.split(" ")[1];
           
            if(token!==null){
                jwt.verify(token,process.env.seckey,(err,result)=>{
                    if(!err)
                    {
                        next()
                    }
                    else{
                        res.status(403).send({Message:"Ivalid token"})
                    }
                })
            }else{
         
             res.status(404).send("token undefined")
            }
        }
        else{
         
            res.status(404).send("send Token")
           }
        

    }
    catch(err){
        res.status(505).send(err)
    }
   

   
  
}

export default verifyToken;