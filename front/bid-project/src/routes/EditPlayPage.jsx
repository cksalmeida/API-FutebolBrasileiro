import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPlayerPage = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/players/${playerId}`);
        setPlayer(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao buscar os dados do jogador.');
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [playerId]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/players/${player.id}`, player);
      navigate(`/teams/${player.teamId}`); 
    } catch (err) {
      console.error('Erro ao salvar os dados do jogador:', err);
    }
  };

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Editar Jogador</h2>
      <form onSubmit={handleSave}>
        <label className="block mb-2">
          Nome:
          <input
            type="text"
            name="name"
            value={player.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Posição:
          <input
            type="text"
            name="position"
            value={player.position}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Data de Nascimento:
          <input
            type="date"
            name="birthDate"
            value={player.birthDate}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditPlayerPage;
