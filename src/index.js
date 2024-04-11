import connectDB from "./database/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});
connectDB();

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(
        `app is listening on port http://localhost:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log("ERROR : ", error);
    throw error;
  }
})();
*/
