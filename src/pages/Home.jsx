import Banner from "../Components/Banner/Banner";
import LittleBanner from "../Components/Little-banner/LittleBanner";
import Navbar from "../Components/Navbar/Navbar";
import Social from "../Components/Social/Social";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <LittleBanner></LittleBanner>
            <Social></Social>
        </div>
    );
};

export default Home;