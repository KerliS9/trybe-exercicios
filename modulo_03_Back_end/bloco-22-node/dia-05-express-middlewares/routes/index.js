const express = require('express');
const produtos = require('../produtos.json');
const { pr, user } = require('../middlewares');
const routes = express.Router();

routes.get("/sales", function (req, res) {
  return res.status(200).json(produtos);
});

/* routes.use(pr.products);
routes.use(pr.inform);
routes.use(pr.date);
routes.use(pr.warranty); */

routes.post("/sales", user.auth, pr.products, pr.inform, pr.date, pr.warranty, function (req, res) {
  // const { productName, infos } = req.body;
  return res.status(201).json({ message: "Venda cadastrada com sucesso" });
});

routes.get("/signup", function (req, res) {
  return res.status(200).json({ message: "Ver usuário" });
});

routes.use(user.checkUserLogin);
routes.post("/signup", function (req, res) {
  // const { email, password, firstName, phone } = req.body;
  return res.status(200).json({ message: "Usuário validado com sucesso" });
});

module.exports = routes;