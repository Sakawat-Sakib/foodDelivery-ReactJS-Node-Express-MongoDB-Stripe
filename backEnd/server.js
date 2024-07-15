import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'



const app = express()
const PORT = 8002


//middleware

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/api/user",userRouter)
app.use("/images",express.static('uploads'))

app.get('/',(req,res)=>{
        res.send('hello from google')
})

//server
app.listen(PORT,()=>console.log("Server Started"))

