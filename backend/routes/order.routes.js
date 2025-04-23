const express = require("express");
const verifyToken = require("../middlewares/auth.middleware");
const { createOrder, getUserOrders } = require("../models/order.model");

const router = express.Router();

router.post("/", verifyToken, async (req, res) => {
  const orderId = await createOrder(req.user.id, req.body.products);
  res.status(201).json({ id: orderId });
});

router.get("/", verifyToken, async (req, res) => {
  const orders = await getUserOrders(req.user.id);
  res.json(orders);
});

module.exports = router;