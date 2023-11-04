const fs = require('fs');
const data = require("../db/user.json")

class UserController {
  constructor() {
    this.data = require("../db/user.json");
  }

  saveDataToFile() {
    fs.writeFile('../db/user.json', JSON.stringify(this.data, null, 2), (err) => {
      if (err) {
        console.error('Error writing to user.json:', err);
      } else {
        console.log('Data has been written to user.json');
      }
    });
  }

  getUsers(req, res) {
    res.status(200).json(this.data);
  }

  getUserById(req, res) {
    const userID = req.params.userID;
    const user = this.data.find((user) => user.userID === userID);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  addUser(user) {
    this.data.push(user);
    this.saveDataToFile();
  }

  createUser(req, res) {
    const { name, dateOfBirth, phoneNumber, role } = req.body;
    //const lastUserID = UserController.data.length > 0 ? UserController.data[UserController.data.length - 1].userID : 'U000';
    const nextUserID = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  
    const newUser = {
      userID: nextUserID,
      name,
      dateOfBirth,
      phoneNumber,
      role,
    };

    console.log(newUser, " ===> nambah nich");

    data.push(newUser)
    saveDataToFile();
  
    res.status(201).json(data);
  }

  updateUser(req, res) {
    const userID = req.params.userID;
    const updatedUser = req.body;

    const userIndex = this.data.findIndex((user) => user.userID === userID);

    if (userIndex !== -1) {
      this.data[userIndex] = { ...this.data[userIndex], ...updatedUser };
      this.saveDataToFile();
      res.status(200).json(this.data[userIndex]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  deleteUser(req, res) {
    const userID = req.params.userID;
    const userIndex = this.data.findIndex((user) => user.userID === userID);

    if (userIndex !== -1) {
      const deletedUser = this.data.splice(userIndex, 1)[0];
      this.saveDataToFile();
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }
}

module.exports = new UserController();
