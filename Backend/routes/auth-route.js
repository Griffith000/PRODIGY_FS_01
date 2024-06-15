// Initilize express router
const authRoutes = require("express").Router();
const signup = require("../controllers/auth-controller");

authRoutes.post("/api/signup", signup);

module.exports = authRoutes;
