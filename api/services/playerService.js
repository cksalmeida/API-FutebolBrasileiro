import Player from "../models/players.js";

class PlayerService {
  async getAll() {
    try {
      const players = await Player.find();
      return players;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao buscar jogadores.");
    }
  }

  async create(name, position, teamId, birthDate) {
    try {
      const newPlayer = new Player({
        name,
        position,
        teamId,
        birthDate,
      });
      await newPlayer.save();
      return newPlayer;  // Retorna o novo jogador após salvar
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar jogador.");
    }
  }
}

export default new PlayerService();
