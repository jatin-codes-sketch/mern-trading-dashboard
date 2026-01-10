import {Router} from "express"
import { registerUser,loginUser } from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router=Router()

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me",verifyJWT,(req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user,
    })
})

export default router