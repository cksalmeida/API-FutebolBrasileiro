import Navbar from "../components/Navbar";
import Teams from "../components/Teams";
import Banner from "../assets/banner.webp";

const Home = () => {
    return (
        <div className="bg-[#20206d] h-screen flex flex-col items-center justify-center">
            <Navbar />
            <Teams />
            <img 
                src={Banner} 
                className="w-full max-w-3xl m-auto mt-8 rounded-3xl object-contain"
                alt="Banner"
            />
        </div>
    );
}

export default Home;
