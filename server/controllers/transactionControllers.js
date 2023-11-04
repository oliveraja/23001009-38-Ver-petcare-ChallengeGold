const fs = require("fs");

class TransactionController {
  constructor() {
    this.data = require("../db/transaction.json");
  }

  saveDataToFile() {
    fs.writeFile("./db/transaction.json", JSON.stringify(this.data, null, 2), (err) => {
      if (err) {
        console.error("Error writing to transaction.json:", err);
      } else {
        console.log("Data has been written to transaction.json");
      }
    });
  }

  createTransaction(req, res) {
    
    const { userID, serviceID, transactionDate, paymentID } = req.body;

    const transactionID = this.data.length > 0 ? this.data[this.data.length - 1].transactionID + 1 : 1;

    const newTransaction = {
      transactionID,
      userID,
      serviceID,
      transactionDate,
      paymentID,
    };

    this.data.push(newTransaction);
    this.saveDataToFile();

    res.status(201).json({ message: "Transaksi berhasil dibuat", transaction: newTransaction });
  }

  getTransactions(req, res) {
    res.status(200).json(this.data);
  }

  getTransactionById(req, res) {
    const transactionID = parseInt(req.params.id);
    const transaction = this.data.find((t) => t.transactionID === transactionID);

    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }
  }

  updateTransaction(req, res) {
    const transactionID = parseInt(req.params.id);
    const updatedTransaction = req.body;

    const existingTransaction = this.data.find((t) => t.transactionID === transactionID);

    if (existingTransaction) {
      
      existingTransaction.userID = updatedTransaction.userID;
      existingTransaction.serviceID = updatedTransaction.serviceID;
      existingTransaction.transactionDate = updatedTransaction.transactionDate;
      existingTransaction.paymentID = updatedTransaction.paymentID;

      this.saveDataToFile();

      res.status(200).json({ message: "Transaksi berhasil diperbarui", transaction: existingTransaction });
    } else {
      res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }
  }

  deleteTransaction(req, res) {
    const transactionID = parseInt(req.params.id);
    const index = this.data.findIndex((t) => t.transactionID === transactionID);

    if (index !== -1) {
      this.data.splice(index, 1);
      this.saveDataToFile();
      res.status(200).json({ message: "Transaksi berhasil dihapus" });
    } else {
      res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }
  }
}

module.exports = new TransactionController();
