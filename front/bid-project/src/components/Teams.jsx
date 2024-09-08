import Palmeiras from '../assets/palmeiras-logo.png'
import Flamengo from '../assets/flamengo-logo.png'
import Sp from '../assets/saopaulo-logo.png'
import Corinthians from '../assets/corinthians-logo.png'
import Internacional from '../assets/internacional-logo.png'
import Gremio from '../assets/gremio-logo.png'
import Galo from '../assets/atleticomineiro-logo.png'
import Cruzeiro from '../assets/cruzeiro-logo.png'
import { Link } from 'react-router-dom'

const Teams = () => {
    
  return (
    <div className="bg-green-400 flex items-center h-16">
      <div className="flex m-auto gap-5 md:gap-10 lg:gap-16">
        <Link to="/teams/1">
          <img src={Palmeiras} className="w-10" alt="Palmeiras logo" />
        </Link>
        <Link to="/teams/2">
          <img src={Flamengo} className="w-10" alt="Flamengo logo" />
        </Link>
        <Link to="/teams/3">
          <img src={Sp} className="w-10" alt="São Paulo logo" />
        </Link>
        <Link to="/teams/4">
          <img src={Corinthians} className="w-10" alt="Corinthians logo" />
        </Link>
        <Link to="/teams/5">
          <img src={Internacional} className="w-10" alt="Internacional logo" />
        </Link>
        <Link to="/teams/6">
          <img src={Gremio} className="w-10" alt="Grêmio logo" />
        </Link>
        <Link to="/teams/7">
          <img src={Galo} className="w-10" alt="Atlético Mineiro logo" />
        </Link>
        <Link to="/teams/8">
          <img src={Cruzeiro} className="w-10" alt="Cruzeiro logo" />
        </Link>
      </div>
    </div>
  )
}

export default Teams