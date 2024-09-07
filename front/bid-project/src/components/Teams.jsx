import Botafogo from '../assets/botafogo-logo.png'

const Teams = () => {
    return(
        <div className="bg-green-400 flex items-center h-16">
            <div className="flex m-auto gap-5 md:gap-10 lg:gap-16">
               <img src={Botafogo} className='w-10'></img>
               <img src={Botafogo} className='w-10'></img>
               <img src={Botafogo} className='w-10'></img>
            </div>
        </div>
    )
}

export default Teams