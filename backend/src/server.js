import express from 'express';
import config from './config/dotenv.js';
import connectDB from './config/db.js';
import healthRoute from './routes/health.route.js';
import bookRoutes from './routes/book.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', healthRoute);
app.use('/api/v1/books', bookRoutes);

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
