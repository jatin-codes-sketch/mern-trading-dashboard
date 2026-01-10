import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
// import { errorHandler } from "./middlewares/error.middleware.js"

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())
// app.use(errorHandler);


// routes import 
// import userRouter from "./routes/user.route.js"
// import holdingRoutes from "./routes/holding.route.js";
// import orderRoutes from "./routes/order.route.js";
// import positionRoutes from "./routes/position.route.js";
// import authRoutes from "./routes/auth.route.js"

// // routes declaration 
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/holdings", holdingRoutes);
// app.use("/api/v1/orders", orderRoutes);
// app.use("/api/v1/positions", positionRoutes);

export default app