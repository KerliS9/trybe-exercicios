const express = require('express');
const app = express();

const { handleError } = require('./middlewares');

app.use(express.json());

app.use('/v1', require('./routes/routeAuthor'));
app.use('/v1', require('./routes/routeUser'));

app.use(handleError);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});