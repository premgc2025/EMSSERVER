
import express from 'express'
import RegisterController from '../Controller/RegisterController.js'
import loginController from '../Controller/LoginCrontroller.js'
import verifyToken from '../Controller/VerifyToken.js'
import userDeleteController from '../Controller/userDeleteController.js'
const router = express.Router()


router.post('/register',RegisterController)
router.post('/login', loginController)
router.delete('/user',verifyToken,userDeleteController)


export default router