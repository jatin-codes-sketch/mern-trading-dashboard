import express from "express";
import {
  getAllHoldings,
  getAllPositions,
  getPortfolioAllocation,
} from "../controllers/holding.controller.js";

const router = express.Router();

router.get("/allHoldings", getAllHoldings);
router.get("/AllPositions", getAllPositions);
router.get("/portfolio-allocation", getPortfolioAllocation);

export default router;
