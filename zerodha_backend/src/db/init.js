// import {Position} from "../models/position.model.js"
// import {Holding} from "../models/holding.model.js"
// import {Order} from "../models/order.model.js"

export const holdings = [
  {
    name: "INFY",
    qty: 10,
    avg: 1480.00,
    price: 1558.40,
    net: "+5.30%",
    day: "+0.82%",
  },
  {
    name: "TCS",
    qty: 4,
    avg: 3400.00,
    price: 3512.25,
    net: "+3.30%",
    day: "-0.45%",
  },
  {
    name: "RELIANCE",
    qty: 3,
    avg: 2420.00,
    price: 2498.70,
    net: "+3.25%",
    day: "+1.12%",
  },
  {
    name: "HDFCBANK",
    qty: 6,
    avg: 1520.00,
    price: 1589.60,
    net: "+4.57%",
    day: "-0.38%",
  },
  {
    name: "ITC",
    qty: 20,
    avg: 410.00,
    price: 432.15,
    net: "+5.40%",
    day: "+2.04%",
  },
];



export const positions = [
  {
    product: "MIS",
    name: "SBIN",
    qty: 10,
    avg: 615.40,
    price: 628.90,
    net: "+2.19%",
    day: "+0.74%",
    isLoss: false,
  },
  {
    product: "MIS",
    name: "ICICIBANK",
    qty: 5,
    avg: 905.20,
    price: 931.40,
    net: "+2.90%",
    day: "+1.28%",
    isLoss: false,
  },
  {
    product: "MIS",
    name: "ADANIENT",
    qty: 2,
    avg: 3250.00,
    price: 3198.55,
    net: "-1.58%",
    day: "-1.62%",
    isLoss: true,
  },
];


// export const seedHoldings=async()=>{
//     try {
//         const operations=holdings.map((item)=>({
//             updateOne:{
//                 filter:{name:item.name},
//                 update:{$set:item},
//                 upsert:true
//             },
//         }))

//         await Holding.bulkWrite(operations);
//         console.log("Holding upserted successfully");
        
//     } catch (error) {
//      console.log("Holding data insertion error, ",error)   
//     }
// };

// export const seedPositions=async()=>{
//     try {
//         const operations=positions.map((item)=>({
//             updateOne:{
//                 filter:{name:item.name},
//                 update:{$set:item},
//                 upsert:true
//             }
//         }))

//         await Position.bulkWrite(operations);
//         console.log("Position upserted successfully");
//     } catch (error) {
//          console.log("Position data insertion error, ",error)   
//     }
// }

// export const seedOrders=async()=>{
//     try {
//         const operations = orders.map((item)=>({
//             updateOne:{
//                 filter:{name:item.name},
//                 update:{$set:item},
//                 upsert:true
//             }
//         }))

//         await Order.bulkWrite(operations);
//         console.log("Order upserted successfully");
        
//     } catch (error) {
//         console.log("Order data insertion error, ",error);
        
//     }
// }





