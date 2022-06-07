// index.js
const express = require('express');
const { Address, Employee } = require('../src/models');

const routerEmployee = express.Router();

// Eager Loading
/* routerEmployee.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        include: [{ 
          model: Address, as: 'addresses', attributes: { exclude: ['number'] },
        }],
      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
}); */

// Lazy Loading
routerEmployee.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }
    // na linha 32 busca somente o employee que corresponde ao id passado no parâmetro
    // na linha 38 busca todos os endereços que tem a fk do employee buscado na linha 32
    // na linha 39 imprime o retorno das duas funções

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

routerEmployee.get('/', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

/* const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`)); */

module.exports = routerEmployee;