import express from 'express';
import env from 'dotenv';
env.config();
import {connectDB} from './fetchData.js';
import cors from 'cors';
import userDataRoutes from './routes/getData.routes.js';
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api",userDataRoutes);
const startServer = async () => {
  await connectDB();
  app.listen(4000, () => {
    console.log('Server running on port 4000');
  });
};

startServer();