const express = require('express');

const userController = require('./controllers/userController');
const employeeController = require('./controllers/employeeController');
const clientBooksController = require('./controllers/clientBookController');

const routers = express.Router();

routers.use('/user', userController);
routers.use('/employees', employeeController);
routers.use('/clientsbooks', clientBooksController);

module.exports = routers;