import { Order } from "../models/order.model.js"

export const getAvailableQty=async(stockName)=>{
    const orders=await Order.find({name:stockName})

    let buyQty=0
    let sellQty=0

    orders.forEach((order)=>{
        if(order.mode ==="BUY")buyQty+=order.qty
        if(order.mode ==="SELL")sellQty+=order.qty
    })

    return buyQty-sellQty;
}