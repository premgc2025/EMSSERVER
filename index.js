import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'




const app = express()
const corsOptions = {
    origin: '*', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  };
  
  app.use(cors(corsOptions));

app.use(express.json())
// app.use(express.static('/tmp'))


// Imporing Model and Function

import router from './Router/RegisterRouter.js'
import deptRouter from './Router/DepartmentRouter.js'
import empRouter from './Router/EmployeeRouter.js'
import salaryRouter from './Router/SalaryRouter.js'
import leaveRouter from './Router/LeaveRouter.js'
import resetpasswordRouter from './Router/ResetPasswordRouter.js'
import adminsummaryRouter from './Router/AdminSummaryRouter.js'



app.use('/api',router)
app.use('/api',router)
app.use('/api',deptRouter)
app.use('/api', empRouter)
app.use('/api', salaryRouter)
app.use('/api', leaveRouter)
app.use('/api', resetpasswordRouter)
app.use('/api', adminsummaryRouter)


app.get('/', (req,res)=>{
    res.send({message:"Hello Wolrd! "})
})



mongoose.connect(`${process.env.mongo_URL}/EMS`)
.then((response)=>{
    console.log("DBMS Server is Up and Running")
})
.catch((err)=>{
    console.log(err)
})


app.listen(process.env.PORT,()=>{
    console.log(`Server Up and Running on PORT ${process.env.PORT}`)
})
