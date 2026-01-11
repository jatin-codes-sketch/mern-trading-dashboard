import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

export const register = AsyncHandler(async (req, res) => {
  const { email, password, userName } = req.body;

  if (!email || !password || !userName) {
    throw new ApiError(400, "All fields are required");
  }

  const exists = await User.findOne({ email });
  if (exists) throw new ApiError(409, "User already exists");

  const user = await User.create({ email, password, userName });

  return res
    .status(201)
    .json(new ApiResponse(201, user, "User registered"));
});

export const login = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.isPasswordCorrect(password))) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = user.generateAccessToken();

  return res.json(
    new ApiResponse(200, { user, token }, "Login successful")
  );
});
