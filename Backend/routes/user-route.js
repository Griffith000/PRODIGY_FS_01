const verifyToken = require("../utils/verifyUser");
const userController = require("../controllers/user-controller");
const express = require("express");
const Router = express.Router();

Router.get("/", userController.test);
Router.post("/update/:id", verifyToken,userController.updateUser);

module.exports = Router;
