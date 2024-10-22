import departmentModel from "../Model/DepartmentModel.js"

const AddDepartmentController = async(req,res)=>{

    const department = req.body 
    

    try{
        const deptData = await departmentModel.create(department)
       
        res.status(200).send({success:true, message:"Department Created  Successfully"})

    }
    catch (error) {
        if (error.code === 11000) {
          // Handle duplicate key error
        
          res.status(409).send({success:false, error: "Department Name already exists" })
         
        } else {
         
          res.status(403).send({success:false , error:error.message, })
        
        }
      }
    };


      const getDepartmentController = async(req,res)=>{
        

        try{ const department = await departmentModel.find()

            res.status(200).send({success:true, department})

        }
        catch (error) {
            
             
              res.status(403).send({success:false , error:error.message, })
       
          }

      }

      const getOneDepartmentController = async(req,res)=>{
        
          const {id}=req.params
        try{ const department = await departmentModel.findOne({_id:id})
       
            res.status(200).send({success:true, department})

        }
        catch (error) {
            
             
              res.status(403).send({success:false , error:error.message, })
       
          }

      }
      // Delete Controller
      const deleteDepartmentController = async(req,res)=>{
        const id = req.params.id
       
          
        try{ const department = await departmentModel.deleteOne({_id:id})

            res.status(200).send({success:true, message:"Delete Successfully"})

        }
        catch (error) {
            
             
              res.status(403).send({success:false , error:error.message, })
       
          }

      }

      const UpdateDepartmentController = async(req,res)=>{
        const {id}=req.params
        const department = req.body 
        
    
        try{
            const deptData = await departmentModel.updateOne({_id:id}, department)
      
            res.status(200).send({success:true, message:"Department Updated  Successfully"})
    
        }
        catch (error) {
            if (error.code === 11000) {
              // Handle duplicate key error
            
              res.status(409).send({success:false, error: "Department Name already exists" })
             
            } else {
             
              res.status(403).send({success:false , error:error.message, })
            
            }
          }
        };



export {AddDepartmentController,getDepartmentController, deleteDepartmentController, getOneDepartmentController,UpdateDepartmentController}