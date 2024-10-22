

import express from 'express'
import verifyToken from '../Controller/VerifyToken.js'
import {ResetPasswordController} from '../Controller/ResetPasswordController.js'



const router = express.Router()


router.put('/resetpassword/:id',verifyToken, ResetPasswordController)






export default router;