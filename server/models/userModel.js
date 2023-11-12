class UserModel {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
      return user;
    }
  
    updateUser(userId, updatedData) {
      const userIndex = this.users.findIndex(user => user.id === userId);
  
      if (userIndex !== -1) {
        this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
        return this.users[userIndex];
      }
  
      return null;
    }
  
    deleteUser(userId) {
      const userIndex = this.users.findIndex(user => user.id === userId);
  
      if (userIndex !== -1) {
        const deletedUser = this.users.splice(userIndex, 1)[0];
        return deletedUser;
      }
  
      return null;
    }
  
    getUserById(userId) {
      return this.users.find(user => user.id === userId);
    }
  
    getAllUsers() {
      return this.users;
    }
  }
  
  module.exports = new UserModel();
  