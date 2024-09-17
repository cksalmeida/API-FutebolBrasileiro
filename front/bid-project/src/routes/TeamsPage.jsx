import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const TeamsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const teamResponse = await axios.get(`http://localhost:3001/teams/${id}`);
        setTeam(teamResponse.data);

        const playersResponse = await axios.get(`http://localhost:3001/players?teamId=${id}`);
        setPlayers(playersResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Erro ao buscar os dados.');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async (playerId) => {
    try {
      await axios.delete(`http://localhost:3001/players/${playerId}`);
      setPlayers(players.filter(player => player.id !== playerId)); 
    } catch (err) {
      console.error('Erro ao excluir jogador:', err);
    }
  };

  const handleEdit = (playerId) => {
    navigate(`/edit-player/${playerId}`);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        {team ? (
          <div className="mb-8">
            <img
              src={team.logoUrl}
              alt={`${team.name} logo`}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-4 text-center">{team.name}</h2>
            <p className="mb-4 text-center">{team.description}</p>
            <p><strong>Cidade:</strong> {team.city}</p>
            <p><strong>Estádio:</strong> {team.stadium}</p>
            <p><strong>Fundação:</strong> {team.foundation}</p>
            <p><strong>Treinador:</strong> {team.coach}</p>
            <p><strong>Títulos:</strong> {team.titles.join(', ')}</p>
            <p><strong>Site Oficial:</strong> <a href={team.officialWebsite} target="_blank" rel="noopener noreferrer">{team.officialWebsite}</a></p>
            <p><strong>História:</strong> {team.history}</p>
          </div>
        ) : (
          <p>Time não encontrado.</p>
        )}

        <h3 className="text-xl font-bold mb-4">Jogadores</h3>

        {players.length > 0 ? (
          <ul className="space-y-4">
            {players.map(player => (
              <li key={player.id} className="p-4 border rounded-md shadow-md">
                <h4 className="text-lg font-semibold">{player.name}</h4>
                <p><strong>Posição:</strong> {player.position}</p>
                <p><strong>Data de Nascimento:</strong> {player.birthDate}</p>

                <button
                  onClick={() => handleEdit(player.id)}
                  className="bg-yellow-500 text-white px-4 py-2 mt-2 rounded-md mr-2"
                >
                  Editar
                </button>

                <button
                  onClick={() => handleDelete(player.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Não há jogadores cadastrados para este time.</p>
        )}
      </div>
    </>
  )
}

export default TeamsPage