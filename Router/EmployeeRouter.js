
import express from 'express'
import verifyToken from '../Controller/VerifyToken.js'
import { AddEmployeeController, EditEmployeeController, GetEmployeeByDepartment, GetEmployeeController, GetSingleEmployeeController, uploadImageMiddleware} from '../Controller/EmployeeController.js'

const router = express.Router()


router.post('/employee',verifyToken,uploadImageMiddleware,AddEmployeeController)
router.put('/employee/:id',verifyToken,EditEmployeeController)
router.get('/employee',verifyToken, GetEmployeeController)
router.get('/employee/:id',verifyToken, GetSingleEmployeeController)
router.get('/employeeid/:id',verifyToken, GetEmployeeByDepartment)


export default router;