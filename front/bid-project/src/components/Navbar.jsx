import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <>
          <nav className="w-full h-20 bg-green-400 flex items-center">
            <div className="flex gap-5 md:gap-10 lg:gap-20 font-medium m-auto text-white">
              <Link to="/">Home</Link>
              <Link to="/cadastro">Cadastro de Jogadores</Link>
            </div>
          </nav>
        </>
      )
    }

export default Navbar