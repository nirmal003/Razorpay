import { config } from "dotenv";
import Razorpay from "razorpay";
import { app } from "./app.js";
import { connectDB } from "./config/database.js";

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  config({ path: "./server/config/config.env" });
}

//  Database Connection
connectDB();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(process.env.PORT, () =>
  console.log(`Sever is working on ${process.env.PORT} `)
);
