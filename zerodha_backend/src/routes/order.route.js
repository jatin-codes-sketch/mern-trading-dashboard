import express from "express";
import {
  createNewOrder,
  getAllOrders,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/newOrder", createNewOrder);
router.get("/orders", getAllOrders);

export default router;
