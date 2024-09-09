import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

const TeamsPage = () => {
  const { id } = useParams()
  const [team, setTeam] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/teams/${id}`)
        setTeam(response.data)
        setLoading(false)
      } catch (err) {
        setError('Erro ao buscar os dados do time.')
        setLoading(false)
      }
    }

    fetchTeam()
  }, [id])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-md shadow-md rounded-md p-6 bg-white">
          {team ? (
            <>
              <img src={team.logoUrl} alt={`${team.name} logo`} className="w-24 h-24 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">{team.name}</h2>
              <p className="mb-4 text-center">{team.description}</p>
              <p><strong>Cidade:</strong> {team.city}</p>
              <p><strong>Estádio:</strong> {team.stadium}</p>
              <p><strong>Fundação:</strong> {team.foundation}</p>
              <p><strong>Cores:</strong> {team.colors.join(', ')}</p>
              <p><strong>Treinador:</strong> {team.coach}</p>
              <p><strong>Títulos:</strong> {team.titles.length > 0 ? team.titles.join(', ') : 'Nenhum título'} </p>
              <p><strong>Histórico:</strong> {team.history}</p>
              <p><strong>Site Oficial:</strong> <a href={team.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-500">{team.officialWebsite}</a></p>
            </>
          ) : (
            <p>Time não encontrado.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default TeamsPage