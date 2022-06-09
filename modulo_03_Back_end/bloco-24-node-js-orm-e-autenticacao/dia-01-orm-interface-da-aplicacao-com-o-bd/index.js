const express = require('express');
// require('dotenv').config();
const errorHandler = require('./middlewares/errorHandler');

// const userController = require('./controllers/userController');
// const employeeController = require('./controllers/employeeController');
// const clientBooksController = require('./controllers/clientBookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(require('./router'));

// app.use('/user', userController);
// app.use('/employees', employeeController);
// app.use('/clientsbooks', clientBooksController);
app.use(errorHandler);
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;