const express = require("express");
const { getList } = require("../controllers/eventController");
const router = express.Router();

router.get("/", getList);
module.exports = router;
