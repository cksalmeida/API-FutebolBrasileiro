import express from "express";
const playerRoutes = express.Router();
import playerController from "../controllers/playerController.js";

// Endpoint para listar todos os jogadores
playerRoutes.get("/players", playerController.getAllPlayers);

// Endpoint para cadastrar os jogadores
playerRoutes.post("/players", playerController.createPlayer);

export default playerRoutes;
