require('dotenv').config();

const app = require('./index');
// console.log('server', app);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));