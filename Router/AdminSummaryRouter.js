
import express from 'express'
import verifyToken from '../Controller/VerifyToken.js'
import { AdminSummaryController } from '../Controller/AdminSummaryController.js';




const router = express.Router()

router.get('/adminsummary',verifyToken, AdminSummaryController)


export default router;