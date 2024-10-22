import departmentModel from "../Model/DepartmentModel.js"
import employeeModel from "../Model/EmployeeModel.js"
import leaveModel from "../Model/leaveModel.js"


const AdminSummaryController = async(req,res)=>{

    try{

        const totalEmployee = await employeeModel.countDocuments()
        const totalDepartment = await departmentModel.countDocuments()

        const totalSalaries = await employeeModel.aggregate([
            {$group:{_id:null, totalSalary:{$sum:"$salary"}}}

        ])
        const totalSalary = totalSalaries[0]?.totalSalary || 0;

        const applliedForLeave = (await leaveModel.countDocuments());

        const leaveStatus = await leaveModel.aggregate([
            {$group:
                {
                    _id:"$status",
                    count:{$sum: 1}
                }
            }
        ])
        const leaveSummary = {
            totalLeave: applliedForLeave,
            approve: leaveStatus.find(item=>item._id==="Approve")?.count || 0,
            reject: leaveStatus.find(item=>item._id==="Reject")?.count || 0,
            pending: leaveStatus.find(item=>item._id==="Pending")?.count || 0,
        }

        res.status(200).send({success:true, totalDepartment,totalEmployee,
            totalSalary, applliedForLeave,leaveSummary})
    }
    catch (error) {
            
             
        res.status(403).send({success:false , error:error.message, })
 
    }

}

export {AdminSummaryController}