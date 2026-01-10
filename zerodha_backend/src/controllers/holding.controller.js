import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Holding } from "../models/holding.model.js";

export const getHoldings = AsyncHandler(async (req, res) => {
  const holdings = await Holding.find({ user: req.user._id });
  res.json(holdings);
});
