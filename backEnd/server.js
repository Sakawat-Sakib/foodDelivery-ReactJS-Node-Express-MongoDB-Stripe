import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'





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
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use("/images",express.static('uploads'))

app.get('/',(req,res)=>{
        res.send('hello from google')
})

//server
app.listen(PORT,()=>console.log("Server Started"))

