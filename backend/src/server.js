import express from 'express';
import config from './config/dotenv.js';
import connectDB from './config/db.js';

const app = express();

connectDB()
  .then(() => {
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
