
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../models/product.model");

async function getProducts(req, res) {
  const products = await getAllProducts();
  res.json(products);
}

async function getProduct(req, res) {
  const product = await getProductById(req.params.id);
  if (!product) return res.status(404).json({ message: "Produit non trouvé" });
  res.json(product);
}

async function addProduct(req, res) {
  const { name, description, price, category_id } = req.body;
  const image = req.file ? `/uploads/products/${req.file.filename}` : null;

  const productId = await createProduct({ name, description, price, image, category_id });
  res.status(201).json({ id: productId });
}

async function updateProductDetails(req, res) {
  const result = await updateProduct(req.params.id, req.body);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Produit non trouvé" });
  }
  res.json({ updated: result.affectedRows });
}

async function removeProduct(req, res) {
  const result = await deleteProduct(req.params.id);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Produit non trouvé" });
  }
  res.json({ deleted: result.affectedRows });
}

module.exports = { getProducts, getProduct, addProduct, updateProductDetails, removeProduct };
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../models/product.model");

async function getProducts(req, res) {
  const products = await getAllProducts();
  res.json(products);
}

async function getProduct(req, res) {
  const product = await getProductById(req.params.id);
  if (!product) return res.status(404).json({ message: "Produit non trouvé" });
  res.json(product);
}

async function addProduct(req, res) {
  const { name, description, price, category_id } = req.body;
  const image = req.file ? `/uploads/products/${req.file.filename}` : null;

  const productId = await createProduct({ name, description, price, image, category_id });
  res.status(201).json({ id: productId });
}

async function updateProductDetails(req, res) {
  const result = await updateProduct(req.params.id, req.body);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Produit non trouvé" });
  }
  res.json({ updated: result.affectedRows });
}

async function removeProduct(req, res) {
  const result = await deleteProduct(req.params.id);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Produit non trouvé" });
  }
  res.json({ deleted: result.affectedRows });
}

module.exports = { getProducts, getProduct, addProduct, updateProductDetails, removeProduct };
