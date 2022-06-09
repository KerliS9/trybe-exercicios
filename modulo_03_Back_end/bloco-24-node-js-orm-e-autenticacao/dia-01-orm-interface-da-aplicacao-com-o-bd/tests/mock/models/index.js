const Employees = require('./employees.json');

/* const mockCreate = (Instance, data) => {
  console.log('mockCreate', data);
  if(!data){
    return;
  }

  const newData = data;

  if(!!Instance[0].id) {
    newData.id = Instance.length + 1;
    console.log('id', newData.id)
  }
  Instance.push(newData);
  return newData;
}; */

const mockCreate = async (Instance, data) => {
  if(!data){
    return;
  }
  if(data) {
    console.log('mockCreate dentro do if', data);
    if(data.firstName) {
      let emp = data;
      // console.log('testando chave pessoa', emp);
      if(!!Instance[0].id) {
        emp.id = Instance.length + 1;
      }
      return emp;
    }
    if(data.city) return data;
  }

  const person = emp; // não esta retorno o objeto completo
  console.log('dados completos', person)
  
  
  Instance.push(person);
  return person;
};

const Employee = {
  create: async (data) => mockCreate(Employees, data),
  findAll: async () => Employees,
};

module.exports = {
  Employee,
};