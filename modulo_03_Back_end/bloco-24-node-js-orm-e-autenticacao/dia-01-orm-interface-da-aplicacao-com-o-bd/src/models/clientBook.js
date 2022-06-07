// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const ClientBook = sequelize.define('ClientBook',
    {},
    { timestamps: false,
      tableName: 'ClientBooks',
    },
  );

  ClientBook.associate = (models) => {
    models.Book.belongsToMany(models.Client, {
      as: 'clients',
      through: ClientBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.Client.belongsToMany(models.Book, {
      as: 'books',
      through: ClientBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return ClientBook;
};