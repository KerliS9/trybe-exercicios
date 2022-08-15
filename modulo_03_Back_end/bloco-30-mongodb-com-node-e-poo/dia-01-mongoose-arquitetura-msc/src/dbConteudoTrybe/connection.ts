import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  user: process.env.MONGO_USER, // Usuário do banco de dados.
  pass: process.env.MONGO_PASSWORD, // senha do usuário do banco de dados.
  autoIndex: false, // Cria index para cada inserção de dado no banco.
  dbName: process.env.MONGO_DATABASE, // Define qual banco de dados vou utilizar.
};

const connectToDatabase = () => mongoose.connect('mongodb://localhost:27017/', options);

export default connectToDatabase;
