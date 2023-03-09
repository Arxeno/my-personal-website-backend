import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import CONFIG from './config';
import Skill from './models/Skill';
import Service from './models/Service';
import Project from './models/Project';

const app: Application = express();

const PORT: number = CONFIG.PORT;
const { MONGODB_URI, MONGODB_DATABASE } = CONFIG;

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

// EXPRESS API ROUTES
app.get('/skills', async (req: Request, res: Response) => {
  const result = await Skill.find({});
  res.json(result);
});

app.get('/services', async (req: Request, res: Response) => {
  const result = await Service.find({});
  res.json(result);
});

app.get('/projects', async (req: Request, res: Response) => {
  const result = await Project.find({});
  res.json(result);
});
