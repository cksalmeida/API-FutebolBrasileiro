import express from 'express';
import mongoose from 'mongoose';
import playerRoutes from './routes/playerRoutes.js';  // Importa suas rotas de jogadores
// Import outros routes caso existam, como Team

const app = express();

// Iniciando a conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/API-FutebolBrasileiro")

// Configurações Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rota de teste inicial
app.get("/", (req, res) => {
  res.json({ message: "API de Futebol Brasileiro está rodando!" });
});

// Usa as rotas de jogadores
app.use('/api', playerRoutes);

// Inicia o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}`);
});
