import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import notFound from './middlewares/notFound.js';

import authRoutes from './routes/auth.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('home');
});

app.use('/api/v1/auth', authRoutes);

app.use(notFound);

const PORT = process.env.PORT || 5100;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database');
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
