const db = require("./db");

async function getAllCategories() {
  const [rows] = await db.execute("SELECT * FROM categories");
  return rows;
}

async function createCategory(name) {
  const [result] = await db.execute("INSERT INTO categories (name) VALUES (?)", [name]);
  return result.insertId;
}

async function deleteCategory(id) {
  const [result] = await db.execute("DELETE FROM categories WHERE id = ?", [id]);
  return result;
}

module.exports = { getAllCategories, createCategory, deleteCategory };
