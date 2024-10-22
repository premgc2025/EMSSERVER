import bcrypt from 'bcrypt'
import registerModel from '../Model/RegisterModel.js'


const ResetPasswordController = async(req,res)=>{
   
   try{
    const {id} = req.params

  
    const {oldpassword, newpassword} = req.body
    const user = await registerModel.findById({_id:id})
    if(user!==null){
       
        bcrypt.compare(oldpassword, user.password, async (err,success)=>{
            if(success===true){
                const saltRounds = 10;
                bcrypt.genSalt(saltRounds, (err,salt)=>{
                    if(!err){
                        bcrypt.hash(newpassword, salt, async (err,hash)=>{
                            if(!err){
                                
                                const userpassword = await registerModel.updateOne({_id:id},{password:hash})
                                res.status(200).send({ success: true, message: "Successfully Reset Password" })

                            }
                            else{
                                res.send({ Message: "Some error while hashing passwword" })
                            }
                        })


                    }
                    else{
                        res.send({success:false ,error:"Some error while bcrypt passwword"})
                    }

                } )

            }
            else {
                res.status(401).send({success:false, error:"Wrong password"})
        
            }

        })

    }
    else {
        res.status(401).send({success:false, error:"Wrong userId"})

    }
   }
   catch (error) {
    console.log("err",error, error.message)
     
res.status(403).send({success:false , error:error.message, })

}
}

export {ResetPasswordController}