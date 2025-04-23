function isAdmin(req, res, next) {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Accès interdit: admin requis" });
    }
    next();
  }
  
  module.exports = isAdmin;
  