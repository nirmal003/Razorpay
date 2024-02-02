import cors from "cors";
import { config } from "dotenv";
import express from "express";
import expressIp from "express-ip";
import path from "path";
import { fileURLToPath } from "url";
import paymentRouter from "./routes/paymentRoute.js";

export const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  config({ path: "./server/config/config.env" });
}

app.use(
  cors({
    origin: "https://razorpay-769f.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressIp().getIpInfoMiddleware);

app.use("/api", paymentRouter);

// app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/u", (req, res) => {
  console.log(req.ipInfo);
  res.send(`${req.ipInfo}`);

  // res.sendFile(path.join("../client/build/index.html"));
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join("../client/build/index.html"));
// });
