import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

import { Holding } from "../models/holding.model.js";
import { Position } from "../models/position.model.js";

import { holdings, positions } from "../db/init.js";

dotenv.config({ path: "../../.env" });

const seedOnce = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("MongoDB connected");

    await Holding.deleteMany({});
    await Position.deleteMany({});

    console.log("Old data deleted");

    await Holding.insertMany(holdings);
    await Position.insertMany(positions);

    console.log("Fresh data inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedOnce();
