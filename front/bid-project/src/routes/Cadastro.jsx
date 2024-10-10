import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    teamId: '',
    birthDate: '',
  });
  const [teams, setTeams] = useState([])
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:3001/teams')
        setTeams(response.data)
      } catch (err) {
        setError('Erro ao carregar os times.')
      }
    }

    fetchTeams()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/players', formData)
      setSuccess('Jogador cadastrado com sucesso!')
      setError(null)
      setFormData({
        name: '',
        position: '',
        teamId: '',
        birthDate: '',
      });
    } catch (err) {
      setError('Erro ao cadastrar o jogador.')
      setSuccess(null)
    }
  };

  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="text-2xl font-bold text-center mt-4 mb-6">Cadastro de Jogadores</h1>
      <div className="max-w-md mx-auto p-4 border rounded shadow-md">
        {error && <div className="bg-red-200 text-red-700 p-2 mb-4 rounded">{error}</div>}
        {success && <div className="bg-green-200 text-green-700 p-2 mb-4 rounded">{success}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            />
          </label>
          <label>
            Posição:
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            />
          </label>
          <label>
            Time:
            <select
              name="teamId"
              value={formData.teamId}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            >
              <option value="" disabled>Selecione um time</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Data de Nascimento:
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Cadastrar Jogador
          </button>
        </form>
      </div>
    </div>
  )
}

export default Cadastro