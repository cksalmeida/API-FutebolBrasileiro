import express from "express";
const playerRoutes = express.Router();
import playerController from "../controllers/playerController.js";

// Endpoint para listar todos os jogadores
playerRoutes.get("/players", playerController.getAllPlayers);

// Endpoint para cadastrar os jogadores
playerRoutes.post("/players", playerController.createPlayer);

// Endpoint para deletar os jogadores
playerRoutes.delete("/players/:id", playerController.deletePlayer);

export default playerRoutes;
