const express = require("express");
const { handleGenerateNewURL } = require("../controllers/url");

const router = express.Router();

router.post("/url", handleGenerateNewURL);

module.exports = router;