import express from 'express';
import verifyToken from '../Controller/VerifyToken.js'


import { AddLeaveController, getLeaveController, getLeaveDetailController, getSingleUserLeaveController, UpdateLeaveController } from '../Controller/LeaveController.js'


const router = express.Router()

router.post('/leave',verifyToken, AddLeaveController)
router.put('/leave/:id',verifyToken, UpdateLeaveController)
router.get('/leave',verifyToken, getLeaveController)
router.get('/leave/:id',verifyToken, getSingleUserLeaveController)
router.get('/leavedetail/:id',verifyToken, getLeaveDetailController)

export default router;