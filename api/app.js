import express from 'express';
import { connections } from 'mongoose';
import mongoose from './config/db-connection.js';
import teamRoutes from './routes/teamRoutes.js'
import playerRoutes from './routes/playerRoutes.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API de Futebol Brasileiro está rodando!" });
});

app.use('/api', teamRoutes)
app.use('/api', playerRoutes);

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}`);
});
