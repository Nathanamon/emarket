const express = require("express");
const verifyToken = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/role.middleware");
const { getAllCategories, createCategory, deleteCategory } = require("../models/category.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await getAllCategories();
  res.json(categories);
});

router.post("/", verifyToken, isAdmin, async (req, res) => {
  const { name } = req.body;
  const categoryId = await createCategory(name);
  res.status(201).json({ id: categoryId });
});

router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  const result = await deleteCategory(req.params.id);
  res.json({ deleted: result.affectedRows });
});

module.exports = router;
