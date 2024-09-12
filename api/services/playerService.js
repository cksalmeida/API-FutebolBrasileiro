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

  async delete(id) {
    try {
      await Player.findByIdAndDelete(id);
      console.log(`Jogador com a id:${id} foi deletado`);
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao excluir jogador.");
    }
  }

  async update(id, name, position, teamId, birthDate) {
    try{
      const updatePlayer = await Player.findByIdAndUpdate(
        id,
        {
          name,
          position,
          teamId,
          birthDate
        },
        {new: true}
      )
      console.log(`Dados do jogador com id:${id} alterados com sucesso.`)
    } catch (error){
      console.log(error)
    }
  }

}

export default new PlayerService();
