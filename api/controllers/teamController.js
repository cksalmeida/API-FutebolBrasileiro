import TeamService from "../services/TeamService.js";

const getAllTeams = async (req, res) => {
  try {
    const teams = await gameService.getAll();
    res.status(200).json({ teams: teams });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};
export default { getAllTeams };
