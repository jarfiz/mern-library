import { connect } from 'mongoose';
import config from './dotenv.js';

const connectDB = async () => {
  try {
    await connect(config.MONGO_URI);
    console.log('MongoDb connected');
  } catch (error) {
    console.log('Error: ', error.message);
    process.exit(1);
  }
};

export default connectDB;
