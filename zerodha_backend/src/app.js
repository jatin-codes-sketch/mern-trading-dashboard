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



// routes import 
import userRouter from "./routes/user.route.js"


// // routes declaration 
app.use("/api/v1/auth", userRouter);


export default app