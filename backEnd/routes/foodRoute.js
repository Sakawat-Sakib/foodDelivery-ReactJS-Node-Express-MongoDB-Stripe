import express from 'express'
import { addFood,listFood,removeFood } from '../controllers/foodController.js'
import multer from "multer"
import path from 'path'


const foodRouter = express.Router();




//creating Storage using multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./uploads/`));
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null,fileName);
    }
  });

const upload = multer({storage:storage})

//all routes

foodRouter.post('/add',upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removeFood)












export default foodRouter;

