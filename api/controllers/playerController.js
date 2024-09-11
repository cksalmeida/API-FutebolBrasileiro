import playerService from "../services/playerService.js";

const getAllPlayers = async (req, res) => {
  try {
    const players = await playerService.getAll();
    res.status(200).json({ players });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao buscar jogadores." });
  }
};

const createPlayer = async (req, res) => {
  try {
    const { name, position, teamId, birthDate } = req.body;
    const newPlayer = await playerService.create(name, position, teamId, birthDate);
    res.status(201).json({ player: newPlayer });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar jogador." });
  }
};

export default { getAllPlayers, createPlayer };
