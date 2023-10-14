import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
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
            <Footer></Footer>
        </div>
    );
};

export default Home;