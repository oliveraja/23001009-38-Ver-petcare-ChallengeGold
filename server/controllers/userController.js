const fs = require('fs');

class UserController {
  constructor() {
    // Inisialisasi data dengan data yang ada di berkas JSON
    this.data = require('../db/user.json');
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

  // Menambahkan user baru
  createUser(user) {
    const idDynamic = this.data.length > 0 ? this.data[this.data.length - 1].userID + 1 : 1;

    const newUser = {
      userID: idDynamic,
      name: user.name,
      dateOfBirth: user.dateOfBirth,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };

    this.data.push(newUser);
    this.saveDataToFile();
    return newUser;
  }

  // Memperbarui user
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

  // Menghapus user
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
