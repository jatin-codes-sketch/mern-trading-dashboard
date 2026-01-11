import { Holding } from "../models/holding.model.js";
import { Order } from "../models/order.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

export const createNewOrder = AsyncHandler(async (req, res) => {
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

  const order = new Order({ name, qty, price, mode });
  await order.save();

  if (mode === "BUY") {
    const holding = await Holding.findOne({ name });

    if (holding) {
      const totalQty = holding.qty + qty;
      const totalValue = holding.qty * holding.avg + qty * price;

      holding.qty = totalQty;
      holding.avg = Number((totalValue / totalQty).toFixed(2));
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

    holding.qty -= qty;
    holding.price = price;
    holding.net = ((holding.price - holding.avg) * holding.qty).toFixed(2);
    holding.day = holding.net;

    holding.qty === 0
      ? await Holding.deleteOne({ name })
      : await holding.save();
  }

  res.status(201).json({
    success: true,
    message: "Order placed",
    order,
  });
});

export const getAllOrders = AsyncHandler(async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});
