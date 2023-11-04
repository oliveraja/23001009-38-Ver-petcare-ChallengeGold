const express = require("express");
const router = express.Router();
const TransactionController = require("../controllers/transactionController");

router.post("/api/transactions", TransactionController.createTransaction);

module.exports = router;
