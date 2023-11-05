const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/api/users", UserController.getUsers);

router.get("/api/users/:userID", UserController.getUserById);

router.post("/api/users", UserController.createUser);

router.put("/api/users/:userID", UserController.updateUser);

router.delete("/api/users/:userID", UserController.deleteUser);

module.exports = router;
