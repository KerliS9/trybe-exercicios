// 'use strict';
/* const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    //  * Helper method for defining associations.
    //  * This method is not a part of Sequelize lifecycle.
    // * The `models/index` file will call this method automatically.
    
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fullName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
}; */

const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  });
// para a model e a tabela no banco de dados sejas iguais, adiciona um terceiro parâmetro na UserTable
// }, { freezeTableName: true });
// outra forma é alterar o nome da tabela, o banco lerá a informação que esta na tableName
// }, { tableName: "teste" });

// se usar snake_case na migrations e no seeds, será necessário acrescentar este parâmetro ao model
// }, { underscored: true });

  return UserTable;
};

module.exports = UserSchema;