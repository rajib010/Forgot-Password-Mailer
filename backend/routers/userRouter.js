import { loginUser, registerUser } from "../controllers/index.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/loginUser", loginUser);

export default userRouter
