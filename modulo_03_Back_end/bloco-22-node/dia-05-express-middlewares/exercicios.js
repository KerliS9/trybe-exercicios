const express = require("express");
const app = express();

app.use(express.json());

app.use('/v1', require('./routes'));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
