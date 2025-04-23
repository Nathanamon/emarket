const { createOrder, getUserOrders } = require("../models/order.model");

async function placeOrder(req, res) {
  const orderId = await createOrder(req.user.id, req.body.products);
  res.status(201).json({ id: orderId });
}

async function getOrders(req, res) {
  const orders = await getUserOrders(req.user.id);
  res.json(orders);
}

module.exports = { placeOrder, getOrders };
