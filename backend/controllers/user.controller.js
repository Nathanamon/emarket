// Si tu veux ajouter plus de logiques pour récupérer ou modifier les données utilisateur

const { findUserByEmail } = require("../models/user.model");

async function getUser(req, res) {
  const user = await findUserByEmail(req.user.email);
  if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
  res.json(user);
}

module.exports = { getUser };
