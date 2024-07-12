import mongoose from "mongoose";

const uri = 'mongodb://127.0.0.1:27017/foodTEST';
export const connectDB = async ()=>{
     mongoose.connect(uri).then(()=>console.log("DB connected"));
}

//'mongodb://127.0.0.1:27017/foodTEST' local

//mongodb+srv://mdsakawatsakib:f6GXjipHlF7m0lt5@cluster0.2s4yzvz.mongodb.net/foodDelivery