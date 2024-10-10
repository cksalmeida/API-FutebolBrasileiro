import express from "express";
const playerRoutes = express.Router();
import playerController from "../controllers/playerController.js";

// Endpoint para listar todos os jogadores
playerRoutes.get("/players", playerController.getAllPlayers);

// Endpoint para listar um jogador
playerRoutes.get('/players/:id', playerController.getOnePlayer)

// Endpoint para cadastrar os jogadores
playerRoutes.post("/players", playerController.createPlayer);

// Endpoint para deletar os jogadores
playerRoutes.delete("/players/:id", playerController.deletePlayer);

// Endpoint para atualizar os jogadores
playerRoutes.put("/game/:id", playerController.updatePlayer)

export default playerRoutes;
