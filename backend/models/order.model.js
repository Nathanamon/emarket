const db = require("./db");

async function createOrder(user_id, products) {
  const [orderResult] = await db.execute("INSERT INTO orders (user_id) VALUES (?)", [user_id]);
  const orderId = orderResult.insertId;

  for (const product of products) {
    await db.execute(
      "INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)",
      [orderId, product.product_id, product.quantity]
    );
  }

  return orderId;
}

async function getUserOrders(user_id) {
  const [orders] = await db.execute("SELECT * FROM orders WHERE user_id = ?", [user_id]);
  return orders;
}

module.exports = { createOrder, getUserOrders };
