import Team from "../models/teams.js";
import Player from "../models/players.js"

class teamService {
  async getAll() {
    try {
      const teams = await Team.find();
      return teams;
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const team = await Team.findById(id)
      const players = await Player.find(
        {
          teamId: team.id
        }
      )
      if (!team) {
        throw new Error("Time não encontrado");
      }
      team.players = players
      return team;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}
export default new teamService();
