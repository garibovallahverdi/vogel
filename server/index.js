import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import AuthRouter from './Routers/AuthRouter.js'
import PostRouter from './Routers/PostRouter.js'
import UserRouter from './Routers/UserRouters.js'
dotenv.config()
const app =express()

app.use(cors()) 
app.use(cookieParser())
app.use(bodyParser.json({limit:"60mb"}))
app.use(bodyParser.urlencoded({limit:"60mb",extended:true}))


app.use('/auth',AuthRouter)
app.use('/post',PostRouter)
app.use('/users',UserRouter)

 
// mongoose.set('strictQuery', false);   
mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true})
 .then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`DB connection succesfully. Server is runing at port ${process.env.PORT}`);
    })
 }) 
 .catch((err)=>{
    console.log(err.message);
 })
 