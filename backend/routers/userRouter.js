import { loginUser, registerUser, forgotPassword, resetPassword } from "../controllers/index.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password/:token", resetPassword);

export default userRouter
