import {AsyncHandler} from "../utils/AsyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"

export const registerUser=AsyncHandler(async(req,res)=>{
    let {userName,email,password}=req.body;

    if(
        [userName,email,password].some((field)=>field.trim()==="")
    ){
        throw new ApiError(400,"all field are required")
    }

    const ExistedUser=await User.findOne({email});
    if(!ExistedUser)throw new ApiError(409,"User with email or user name is already existed")


    const user=await User.create({
        userName,
        email,
        password,
    })

    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the owner")
    }

    return res.status(201).json(
        new ApiResponse(200,createdOwner,"User registered succefully")
    )
})