const express = require("express");
const { getFixedController } = require("../controllers/fixedController");
const router = express.Router();

router.get("/", getFixedController);

module.exports = router;
