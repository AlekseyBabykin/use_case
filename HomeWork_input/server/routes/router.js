const express = require("express");
const router = express.Router();
const { getInfo } = require("../controllers/getInfo.js");

router.get("/search", getInfo);

module.exports = { router };
