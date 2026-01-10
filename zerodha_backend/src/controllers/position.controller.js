import { Holding } from "../models/holding.model.js";

export const getAllPositions = async (req, res) => {
  try {
    const holdings = await Holding.find({});

    const positions = holdings.map(h => ({
      product: "MIS",
      name: h.name,
      qty: h.qty,
      avg: h.avg || 0,
      price: h.price || 0,
      day: h.day || "0.00",
    }));

    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
};
