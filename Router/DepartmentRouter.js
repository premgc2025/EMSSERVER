
import express from 'express'
import verifyToken from '../Controller/VerifyToken.js'
import { AddDepartmentController, deleteDepartmentController, getDepartmentController, getOneDepartmentController, UpdateDepartmentController } from '../Controller/DepartmentController.js'

const router = express.Router()

router.get('/department',verifyToken,getDepartmentController)
router.get('/department/:id',verifyToken,getOneDepartmentController)
router.post('/department',verifyToken,AddDepartmentController)
router.delete('/departmentss/:id',verifyToken,deleteDepartmentController)
router.put('/department/:id',verifyToken,UpdateDepartmentController)

export default router;