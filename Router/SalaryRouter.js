
import express from 'express'
import verifyToken from '../Controller/VerifyToken.js'

import { AddSalaryController, GetSalaryController, GetSalarySingleController } from '../Controller/SalaryController.js'
import { GetEmployeeController } from '../Controller/EmployeeController.js'

const router = express.Router()


router.post('/salary',verifyToken,AddSalaryController)
router.get('/salary',verifyToken,GetSalaryController)
router.get('/salary/:id',verifyToken,GetSalarySingleController)

// router.get('/employee/:id',verifyToken, GetSingleEmployeeController)



export default router;