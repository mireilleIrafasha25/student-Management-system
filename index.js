const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const app=express()
const studentroute=require('./routes/student')
mongoose.connect('mongodb://localhost:27017')
const db=mongoose.connection

db.on('error',(err)=>
{
    console.log(err)
})
db.once('open',()=>
{
    console.log('Database connection Established')
})
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>
{
    console.log( `server running on port ${PORT}`)
})
app.use('/api/student',studentroute)