import express from 'express';
import config from './config/dotenv.js';

const app = express();

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
