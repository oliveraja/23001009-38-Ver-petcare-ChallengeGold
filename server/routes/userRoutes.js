const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.showRegisterPage);
router.post('/register', userController.registerUser);

router.get('/login', userController.showLoginPage);
router.post('/login', userController.loginUser);

router.get('/profile/:userId/update', userController.showUpdateProfilePage);
router.put('/profile/:userId/update', userController.updateProfile);
router.get("/profile/:userID/delete", userController.showDeleteProfile);
router.delete('/profile/:userId/delete', userController.deleteProfile);

module.exports = router;

