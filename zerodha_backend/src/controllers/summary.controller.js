import { Holding } from "../models/holding.model.js";

export const getSummary = async (req, res) => {
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
  } catch {
    res.status(500).json({ error: "Summary fetch failed" });
  }
};
