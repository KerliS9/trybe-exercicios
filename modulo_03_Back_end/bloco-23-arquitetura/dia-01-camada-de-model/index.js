const express = require('express');
const app = express();

app.use(express.json());

app.use('/v1', require('./routes/routeAuthor'));
/* app.get('/', async (_req, res) => {
	const authors = await Author.getAll();
	res.status(200).json(authors);
}) */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});