const express = require('express');
require('dotenv').config();

const userController = require('./controllers/userController');
const employeeController = require('./controllers/employeeController');
const clientBooksController = require('./controllers/clientBookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', userController);
app.use('/employees', employeeController);
app.use('/clientsbooks', clientBooksController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));