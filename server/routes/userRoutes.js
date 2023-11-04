const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const data = require("../db/user.json")

router.get("/api/users", UserController.getUsers);

router.get("/api/users/:userID", UserController.getUserById);

router.post("/api/users", (req, res) => {
    const { name, dateOfBirth, phoneNumber, role } = req.body;
    const lastUserID = UserController.data.length > 0 ? UserController.data[UserController.data.length - 1].userID : 'U000';
    const nextUserID = `U${(+lastUserID.substr(1) + 1).toString().padStart(3, '0')}`;
  
    const newUser = {
      userID: nextUserID,
      name,
      dateOfBirth,
      phoneNumber,
      role,
    };

    console.log(newUser, " ===> nambah nich");

    UserController.addUser(newUser);
  
    res.status(201).json(data);
  });

router.put("/api/users/:userID", UserController.updateUser);

router.delete("/api/users/:userID", UserController.deleteUser);

module.exports = router;
