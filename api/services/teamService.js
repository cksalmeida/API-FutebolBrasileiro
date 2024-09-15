import Team from "../models/teams.js";

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
      const team = await Team.findById(id).populate("players");
      if (!team) {
        throw new Error("Time não encontrado");
      }
      return team;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}
export default new teamService();
