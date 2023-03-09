import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import CONFIG from './config';

const app: Application = express();

const PORT: number = CONFIG.PORT;
const { MONGODB_URI, MONGODB_DATABASE } = CONFIG;

app.get('/skills', (req, res) => {});

// MONGODB
// STARTING MONGODB
mongoose.set('strictQuery', false);

mongoose
  .connect(`${MONGODB_URI}/${MONGODB_DATABASE}?authSource=admin`)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server port: ${PORT}`));
  })
  .catch((err) => console.log(err));
