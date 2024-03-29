import express from "express";
import {
  checkout,
  getKey,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/getkey").get(getKey);
router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;
