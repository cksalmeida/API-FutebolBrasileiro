import express from "express";
const teamRoutes = express.Router();
import teamController from "../controllers/teamController.js";
import TeamService from "../services/TeamService.js";

//Endpoint para listar todos os times
teamRoutes.get("/teams", teamController.getAllTeams);

//Endpoint pora listar um time
teamRoutes.get("/teams/:id", teamController.getOneTeam);

export default teamRoutes;
