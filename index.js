import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
const app=express()
app.use(express.json())
const db_connection_string=process.env.MONGOODB_URL
const PORT=process.env.PORT || 3000
mongoose.connect(db_connection_string)
.then(()=>
    {
console.log("connected to Database succefully")
app.listen(PORT,()=>
{
    console.log(`server running on port ${PORT}`)
})
    }
)
.catch(err=>
    {
        console.log(err)
    })

