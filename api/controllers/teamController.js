import TeamService from "../services/teamService.js";

const getAllTeams = async (req, res) => {
  try {
    const teams = await TeamService.getAll();
    res.status(200).json({ teams: teams });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

const getOneTeam = async (req, res) => {
  try {
    const teamId = req.params.id;
    const teams = await TeamService.getOne(teamId);
    res.status(200).json({ teams: teams });
  } catch (error) {
    console.error(error.message);
    if (error.message === "Time não encontrado") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro interno no servidor." });
    }
  }
};

export default { getAllTeams, getOneTeam };
