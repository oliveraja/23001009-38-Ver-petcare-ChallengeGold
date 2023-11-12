const userModel = require('../models/userModel');

class UserController {

  //buat register
  showRegisterPage(req, res) {
    res.render('register');
  }

    registerUser(req, res) { 
    const { username, password } = req.body;
    const newUser = userModel.addUser({ id: Date.now(), username, password });
    res.send(`User registered: ${JSON.stringify(newUser)}`);
  }

  //buat login kalo uda ada akun
  showLoginPage(req, res) {
    res.render('login');
  }

    loginUser(req, res) { 
    const { username, password } = req.body;
    const user = userModel.getAllUsers().find(u => u.username === username && u.password === password);

    if (user) {
      res.send(`Login successful for user: ${JSON.stringify(user)}`);
    } else {
      res.send('Invalid username or password');
    }
  }

  //ngeupdate profile
  showUpdateProfilePage(req, res) {
    res.render('updateProfile'); 
  }

    updateProfile(req, res) { 
    const userId = parseInt(req.params.userId);
    const updatedData = req.body;
    const updatedUser = userModel.updateUser(userId, updatedData);

    if (updatedUser) {
      res.send(`Profile updated for user: ${JSON.stringify(updatedUser)}`);
    } else {
      res.send('User not found');
    }
  }

  //ngedelete profile
  showDeleteProfile(req, res) {
    const userID = req.params.userID;
    res.render("deleteProfile", { userID });
  }

  deleteProfile(req, res) {
    const userId = parseInt(req.params.userId);
    const deletedUser = userModel.deleteUser(userId);

    if (deletedUser) {
      res.send(`Profile deleted for user: ${JSON.stringify(deletedUser)}`);
    } else {
      res.send('User not found');
    }
  }
}

module.exports = new UserController();
