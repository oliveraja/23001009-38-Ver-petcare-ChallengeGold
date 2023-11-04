const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/serviceController");

router.get("/api/services", ServiceController.getServices);

module.exports = router;
