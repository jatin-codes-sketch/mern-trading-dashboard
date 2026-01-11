import { Holding } from "../models/holding.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

export const getAllHoldings = AsyncHandler(async (req, res) => {
  const allHoldings = await Holding.find({});
  res.json(allHoldings);
});

export const getAllPositions = AsyncHandler(async (req, res) => {
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
});

export const getPortfolioAllocation = AsyncHandler(async (req, res) => {
  const holdings = await Holding.find({});

  const allocation = holdings.map(h => ({
    label: h.name,
    value: Number((h.avg * h.qty).toFixed(2)),
  }));

  res.json(allocation);
});
