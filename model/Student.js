const mongoose=require('mongoose')
const schema=mongoose.Schema

const studentschema=new schema(
    {
        first_name:
        {
            type:String,
            required:true

        },
        last_name:
        {
            type:String,
            required:true
            
        },
        email:
        {
            type:String,
            required:true,
            unique:true
            
        },
        phone:
        {
            type:String,
            required:true
            
        },
        nationalId:
        {
            type:String,
            required:true,
            unique:true,
            length:16
            
        },
        gender:
        {
            type:String,
            required:true,
            unique:true,
            enum:
            {
                message:'Gender must be either Male or Female',
                values:['Male','Female']
            }
            },},
            {timestamps:true}
);
const  student= mongoose.model("student",studentschema)
module.exports=student;