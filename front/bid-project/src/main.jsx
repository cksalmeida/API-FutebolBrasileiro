import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Cadastro from './routes/Cadastro'
import TeamsPage from './routes/TeamsPage'
import EditPlayerPage from './routes/EditPlayPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/teams/:id',
    element: <TeamsPage />,
  },
  {
    path: '/edit-player/:playerId',
    element: <EditPlayerPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
