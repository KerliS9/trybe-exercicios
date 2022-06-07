// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address, // de houver mais de um endereço para cada employeeId, troca hasOne por hasMany
    // gerando um array de objetos para os endereços de cada employee
      { foreignKey: 'employee_id', as: 'addresses' }); // employee_id e employeeId geram o mesmo resultado de pesquisa
  };

  return Employee;
};