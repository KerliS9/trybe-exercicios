// models/User.js
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Clients',
    underscored: true,
  });

  return Client;
};