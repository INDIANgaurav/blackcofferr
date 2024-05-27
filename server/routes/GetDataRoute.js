const express = require("express");
const router = express.Router();

const { GetData } = require("../controller/GetData.js");

router.get("/getData", GetData);

module.exports = router;
