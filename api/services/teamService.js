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
}
export default new teamService();
