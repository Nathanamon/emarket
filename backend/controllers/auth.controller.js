const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("../models/user.model");

async function register(req, res) {
  const { name, email, password, role = "client" } = req.body;
  const user = await findUserByEmail(email);
  if (user) return res.status(409).json({ message: "Email déjà utilisé" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await createUser({ name, email, password: hashedPassword, role });
  res.status(201).json({ id: userId });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Mot de passe incorrect" });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  res.json({ token });
}

module.exports = { register, login };
