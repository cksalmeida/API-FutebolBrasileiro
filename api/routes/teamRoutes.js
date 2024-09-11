import express from "express";
const teamRoutes = express.Router();
import teamController from "../controllers/teamController.js";
import TeamService from "../services/TeamService.js";

//Endpoint para listar todos os times
teamRoutes.get("/teams", teamController.getAllTeams);

export default teamRoutes;
