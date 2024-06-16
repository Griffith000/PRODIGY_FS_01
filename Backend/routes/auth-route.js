// Initilize express router
const express = require("express");
const authRoutes = express.Router();
const signup = require("../controllers/auth-controller");

authRoutes.post("/signup", signup);

module.exports = authRoutes;
