const test = require("../controllers/user-controller");
const express = require("express");
const Router = express.Router();

Router.get("/", test);

module.exports = Router;
