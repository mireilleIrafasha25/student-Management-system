const studentmodel=require('../model/Student')

const index=(req,res,next)=>
{
    studentmodel.find()
    .then(Response=>
        {
res.json({
    Response})
        }
    )
    .catch(error=>{
        res.json({
            message: "An error occur"
            
        })
    })
}
const show=(req,res,next)=>
{
    let studentId=req.body.studentId
    studentmodel.findById(studentId)

    .then(response=>
        {
            res.json(
                {
                    response
                
                })
     })
     .catch(error=>{
res.json({
    message:"Error from listing all students"
})
     })
}
const store=(req,res,next)=>
{
    let newstudent=new student({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    phone:req.body.nationalId,
    nationalId:req.body.nationalId,
    gender:req.body.gender,

})
newstudent.save()
.then(()=>
{
    res.json({
        message:"student Added successfully"
    })
})
.catch(error=>
    {
        res.json("Error occured for storing ")
    })
}
const update=(req,res,next)=>
{
    let studentId=req.body.studentId
    
    let updateddata={
        first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    phone:req.body.nationalId,
    nationalId:req.body.nationalId,
    gender:req.body.gender,
    }
    studentmodel.findByIdAndUpdate(studentId,{$set:updateddata})
    .then(response=>
{
    res.json({
        student:response,
        message:"student updated successfully"
    })
})
.catch(error=>
    {
        res.json("Error occured for storing ")
    })}
    const destroy=(req,res,next)=>
    {
        let studentId=req.body.studentId
        studentmodel.findByIdAndDelete(studentId)
        .then(()=>
    {
        res.json({
            message:"student was deleted successfully"
        })
    })
    .catch(error=>
        {
            res.json("Error occured for delete ")
        })}



module.exports={index,show,store,update,destroy}