import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String
})

export const Order=mongoose.model("Order",orderSchema);