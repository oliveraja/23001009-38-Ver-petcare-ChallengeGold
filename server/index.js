const express = require('express');
const app = express();
const UserController = require('./controllers/userController');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);
app.use('/', petRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});