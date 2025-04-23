const { getAllCategories, createCategory, deleteCategory } = require("../models/category.model");

async function getCategories(req, res) {
  const categories = await getAllCategories();
  res.json(categories);
}

async function addCategory(req, res) {
  const { name } = req.body;
  const categoryId = await createCategory(name);
  res.status(201).json({ id: categoryId });
}

async function removeCategory(req, res) {
  const result = await deleteCategory(req.params.id);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Catégorie non trouvée" });
  }
  res.json({ deleted: result.affectedRows });
}

module.exports = { getCategories, addCategory, removeCategory };
