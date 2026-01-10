import { Holding } from "../models/holding.model.js";
import { Order } from "../models/order.model.js";

export const placeOrder = async (req, res) => {
  try {
    let { name, qty, price = 0, mode } = req.body;

    qty = Number(qty);
    price = Number(price);

    if (!name || !qty || !mode || qty <= 0) {
      return res.status(400).json({ error: "Invalid order data" });
    }

    if (mode === "SELL") {
      const holding = await Holding.findOne({ name });

      if (!holding || holding.qty < qty) {
        return res.status(400).json({
          error: `Insufficient quantity. Available: ${holding ? holding.qty : 0}`,
        });
      }
    }

    const order = await Order.create({ name, qty, price, mode });

    if (mode === "BUY") {
      const holding = await Holding.findOne({ name });

      if (holding) {
        const totalQty = holding.qty + qty;
        const totalValue = holding.qty * holding.avg + qty * price;

        holding.qty = totalQty;
        holding.avg = Number((totalValue / totalQty).toFixed(2));
        holding.price = price;
        holding.net = ((price - holding.avg) * holding.qty).toFixed(2);
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

      holding.qty -= qty;
      holding.price = price;
      holding.net = ((price - holding.avg) * holding.qty).toFixed(2);
      holding.day = holding.net;

      if (holding.qty === 0) {
        await Holding.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.status(201).json({
      success: true,
      message: "Order placed",
      order,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllOrders = async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
};
