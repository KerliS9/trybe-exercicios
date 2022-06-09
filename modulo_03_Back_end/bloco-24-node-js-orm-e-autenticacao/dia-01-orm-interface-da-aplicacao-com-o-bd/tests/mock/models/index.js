const Employees = require('./employees.json');

const mockCreate = (Instance, data) => {
  if(!data){
    return;
  }

  const newData = data;
  if(!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const Employee = {
  create: async (data) => mockCreate(Employees, data),
  findAll: async () => Employees,
};

module.exports = {
  Employee,
};