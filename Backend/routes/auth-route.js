// Initilize express router
const express = require("express");
const authRoutes = express.Router();
const signup = require("../controllers/auth-controller");
const signin = require("../controllers/auth-controller");

authRoutes.post("/signup", signup);
authRoutes.post("/signin", signin);

module.exports = authRoutes;
