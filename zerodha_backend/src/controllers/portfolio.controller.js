import { Holding } from "../models/holding.model.js";

export const getPortfolioAllocation = async (req, res) => {
  const holdings = await Holding.find({});

  const allocation = holdings.map(h => ({
    label: h.name,
    value: Number((h.avg * h.qty).toFixed(2)),
  }));

  res.json(allocation);
};
