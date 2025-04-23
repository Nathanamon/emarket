const express = require("express");
const verifyToken = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/role.middleware");
const upload = require("../middlewares/upload.middleware");

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../models/product.model");

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
});

// GET product by id
router.get("/:id", async (req, res) => {
  const product = await getProductById(req.params.id);
  if (!product) return res.status(404).json({ message: "Produit non trouvé" });
  res.json(product);
});

// POST create product (admin only)
router.post("/", verifyToken, isAdmin, upload.single("image"), async (req, res) => {
  const { name, description, price, category_id } = req.body;
  const image = req.file ? `/uploads/products/${req.file.filename}` : null;

  const productId = await createProduct({ name, description, price, image, category_id });
  res.status(201).json({ id: productId });
});

// PUT update product (admin only)
router.put("/:id", verifyToken, isAdmin, async (req, res) => {
  const result = await updateProduct(req.params.id, req.body);
  res.json({ updated: result.affectedRows });
});

// DELETE product (admin only)
router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  const result = await deleteProduct(req.params.id);
  res.json({ deleted: result.affectedRows });
});

module.exports = router;
