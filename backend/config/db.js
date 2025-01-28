import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sujithasubramanian:Babysujitha2512@cluster0.tnd2n.mongodb.net/ecommerce-food').then(()=>console.log("DB CONNECTED"));
}