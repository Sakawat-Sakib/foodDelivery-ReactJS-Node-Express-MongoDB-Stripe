import express from 'express'
import {loginUser,registerUser} from "../controllers/userController.js"
import multer from 'multer'
const userRouter = express.Router()

const upload = multer()

userRouter.post('/register',upload.any(),registerUser)
userRouter.post('/login',upload.any(),loginUser)


export default userRouter;