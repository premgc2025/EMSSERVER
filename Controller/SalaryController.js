import moment from "moment";
import salaryModel from "../Model/SalaryModel.js"
import employeeModel from "../Model/EmployeeModel.js";



const AddSalaryController = async(req, res) => {  
    try {
        const {
            employeeId,
            departmentId,
            basicsalary,
            allowance,
            deduction,
            paydate
        } = req.body

        const netsalary = parseInt(basicsalary) + parseInt(allowance) -parseInt(deduction);

        const newSalaray = {
            employeeId,
            departmentId,
            basicsalary,
            allowance,
            deduction,
            netsalary,
            paydate: moment(paydate).format('YYYY-MM-DD')
        }

        const salaryData = await salaryModel.create(newSalaray)
        res.status(200).send({ success: true, message: "Successfully Created Salary" })

    }   catch (error) {
        console.log("err",error, error.message)
         
    res.status(403).send({success:false , error:error.message, })

}
}

// Get Salary

const GetSalaryController =async(req,res)=>{

    try{
       
       
        const salaryData = await salaryModel.find().populate("departmentId").populate("employeeId")
        res.status(200).send({ success: true, salaryData })

    }
    catch (error) {
        console.log("err",error, error.message)
         
    res.status(403).send({success:false , error:error.message, })

} 
}
// Get Salary for Single User 
const GetSalarySingleController =async(req,res)=>{

    try{
        const {id} = req.params
       
        let empData
        let salaryData;
        empData = await employeeModel.findOne({userId:id})
        if(!empData){
            salaryData = await salaryModel.find({employeeId:id}).populate("departmentId").populate("employeeId")

        }
        else {
            salaryData = await salaryModel.find({employeeId:empData._id}).populate("departmentId").populate("employeeId")

        }
        
        res.status(200).send({ success: true, salaryData })

    }
    catch (error) {
        console.log("err",error, error.message)
         
    res.status(403).send({success:false , error:error.message, })

} 
}

export { AddSalaryController, GetSalaryController,GetSalarySingleController }