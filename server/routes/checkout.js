import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import axios from "axios";
import chalk from "chalk";

export default (app) => {
  app.post("/api/payment/orders", async (req, res) => {
    try {
      const instance = new Razorpay({
        key_id: process.env.RAZOR_KEY_ID,
        key_secret: process.env.RAZOR_KEY_SECRET,
      });

      const options = {
        amount: req.body.amount * 100,
        currency: "INR",
        receipt: crypto.randomBytes(10).toString("hex"),
      };
      console.log(req.body);

      instance.orders.create(options, (error, order) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Something Went Wrong!" });
        }
        console.log(order);
        res.status(200).json({ data: order });
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error!" });
      console.log(error);
    }
  });

  app.post("/api/payment/verify", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;
      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      console.log(chalk.red(sign));
      const expectedSign = crypto
        .createHmac("sha256", process.env.RAZOR_KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

      if (razorpay_signature === expectedSign) {
        return res
          .status(200)
          .json({ message: "Payment verified successfully" });
      } else {
        return res.status(400).json({ message: "Invalid signature sent!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error!" });
      console.log(error);
    }
  });
};
