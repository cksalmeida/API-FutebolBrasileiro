import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <>
          <nav className=" bg-[#bdf22b] w-full h-20 flex items-center opacity-90">
            <div className="flex gap-5 md:gap-10 lg:gap-20 font-medium m-auto text-white">
              <Link to="/">PÁGINA INICIAL</Link>
              <Link to="/cadastro">CADASTRO DE JOGADORES</Link>
            </div>
          </nav>
        </>
      )
    }

export default Navbar