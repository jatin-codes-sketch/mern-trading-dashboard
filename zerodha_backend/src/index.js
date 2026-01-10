import dotenv from "dotenv"
dotenv.config()

import app from "./app.js"
import connectDB from "./db/index.js"
import { Holding } from "./models/holding.model.js"
import { Position } from "./models/position.model.js"
import {Order} from "./models/order.model.js"


app.get("/api/v1/allHoldings",async(req,res)=>{
  const allHoldings=await Holding.find({})
  res.json(allHoldings);
})

app.get("/api/v1/AllPositions", async (req, res) => {
  try {
    const holdings = await Holding.find({});

    const positions = holdings.map(h => ({
      product: "MIS",
      name: h.name,
      qty: h.qty,
      avg: h.avg || 0,
      price: h.price || 0,
      day: h.day || "0.00"
    }));

    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.post("/api/v1/newOrder", async (req, res) => {
  try {
    let { name, qty, price = 0, mode } = req.body;

    // 🔐 Force numbers (VERY IMPORTANT)
    qty = Number(qty);
    price = Number(price);

    if (!name || !qty || !mode || qty <= 0) {
      return res.status(400).json({ error: "Invalid order data" });
    }

    // 🔴 SELL VALIDATION (USING HOLDINGS)
    if (mode === "SELL") {
      const holding = await Holding.findOne({ name });

      if (!holding || holding.qty < qty) {
        return res.status(400).json({
          error: `Insufficient quantity. Available: ${holding ? holding.qty : 0}`,
        });
      }
    }

    // ✅ SAVE ORDER
    const order = new Order({
      name,
      qty,
      price,
      mode,
    });

    await order.save();

    // ✅ UPDATE HOLDINGS
    if (mode === "BUY") {
      const holding = await Holding.findOne({ name });

      if (holding) {
        const existingQty = Number(holding.qty) || 0;
        const existingAvg = Number(holding.avg) || 0;

        const totalQty = existingQty + qty;
        const totalValue =
          existingQty * existingAvg + qty * price;

        const newAvg =
          totalQty > 0 ? totalValue / totalQty : price;

        holding.qty = totalQty;
        holding.avg = Number(newAvg.toFixed(2));
        holding.price = price;
        holding.net = ((holding.price - holding.avg) * holding.qty).toFixed(2);
        holding.day = holding.net;

        await holding.save();
      } else {
        await Holding.create({
          name,
          qty,
          avg: price,
          price,
          net: "0.00",
          day: "0.00",
        });
      }
    }

    if (mode === "SELL") {
      const holding = await Holding.findOne({ name });

      holding.qty = holding.qty - qty;
      holding.price = price;
      holding.net = ((holding.price - holding.avg) * holding.qty).toFixed(2);
      holding.day = holding.net;

      if (holding.qty === 0) {
        await Holding.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    return res.status(201).json({
      success: true,
      message: "Order placed",
      order,
    });
  } catch (err) {
    console.error("Order error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});



app.get("/api/v1/summary", async (req, res) => {
  try {
    const holdings = await Holding.find({});

    let investment = 0;
    let currentValue = 0;

    holdings.forEach(h => {
      investment += h.avg * h.qty;
      currentValue += h.price * h.qty;
    });

    const pnl = currentValue - investment;
    const pnlPercent =
      investment > 0 ? ((pnl / investment) * 100).toFixed(2) : "0.00";

    res.json({
      investment: investment.toFixed(2),
      currentValue: currentValue.toFixed(2),
      pnl: pnl.toFixed(2),
      pnlPercent,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Summary fetch failed" });
  }
});



app.get("/api/v1/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.get("/api/v1/portfolio-allocation", async (req, res) => {
  try {
    const holdings = await Holding.find({});

    const allocation = holdings.map(h => ({
      label: h.name,
      value: Number((h.avg * h.qty).toFixed(2)),
    }));

    res.json(allocation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Allocation fetch failed" });
  }
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is  running at port: ${process.env.PORT}`)
    } )
})
.catch(err=>{
    console.log("MONGODB connection failed!!! ",err);
})