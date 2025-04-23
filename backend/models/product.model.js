const db = require("./db");

async function getAllProducts() {
  const [rows] = await db.execute("SELECT * FROM products");
  return rows;
}

async function getProductById(id) {
  const [rows] = await db.execute("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
}

async function createProduct({ name, description, price, image, category_id }) {
  const [result] = await db.execute(
    "INSERT INTO products (name, description, price, image, category_id) VALUES (?, ?, ?, ?, ?)",
    [name, description, price, image, category_id]
  );
  return result.insertId;
}

async function updateProduct(id, data) {
  const fields = Object.keys(data).map((key) => `${key} = ?`).join(", ");
  const values = Object.values(data);
  const [result] = await db.execute(
    `UPDATE products SET ${fields} WHERE id = ?`,
    [...values, id]
  );
  return result;
}

async function deleteProduct(id) {
  const [result] = await db.execute("DELETE FROM products WHERE id = ?", [id]);
  return result;
}

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
