const express = require('express');
require('dotenv').config();

const userController = require('./src/controllers/userController');
const employeeController = require('./src/controllers/employeeController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', userController);
app.use('/employees', employeeController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));