import 'dotenv/config';
import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
) => mongoose.connect(mongoDatabaseURI as string);

export default connectToDatabase;


// || 'mongodb://root:kerli5678@localhost:27017/glassesStore?authSource=admin'
// MONGO_URI=mongodb://root:kerli5678@localhost:27017/?authMechanism=DEFAULT