import express from "express";
import User from "../models/userModel.js";
import expressAsyncHandler from 'express-async-handler';
import data from "../data.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
      //Atention!!! removes all users
      //await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;
