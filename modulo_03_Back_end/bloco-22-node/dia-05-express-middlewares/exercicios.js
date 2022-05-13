const express = require("express");
const app = express();

app.use(express.json());

const produtos = require("./produtos.json");

app.get("/sales", async function (req, res) {
  return res.status(200).json(produtos);
});

app.post("/sales", async function (req, res) {
  const { productName, infos } = req.body;
  // const validDate = "dd/mm/aaa";
  const validDate = new RegExp("\d{2}/\d{2}/\d{4}"); 
  console.log(validDate);
  if (!productName || productName === '') return res.status(400).json({ "message": "O campo productName é obrigatório" });
  else if (productName.length < 4) return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });
  else if (!infos || !Object.keys(infos)) return res.status(400).json({ "message": "O campo infos é obrigatório" });
  else if (!infos.saleDate || infos.saleDate !== validDate) return res.status(400).json({ "message": "O campo saleDate é obrigatório" });
  return res.status(200).json({ message: "Deu certo" });
});

app.listen(3000, () => {
  console.log("Aplicação ouvindo na porta 3000 te");
});

// ^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$