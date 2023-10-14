import Banner from "../Components/Banner/Banner";
import LittleBanner from "../Components/Little-banner/LittleBanner";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <LittleBanner></LittleBanner>
        </div>
    );
};

export default Home;