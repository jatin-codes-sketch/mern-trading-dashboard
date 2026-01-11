import { Holding } from "../models/holding.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

export const getSummary = AsyncHandler(async (req, res) => {
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
});
