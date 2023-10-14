import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { MdArrowCircleLeft } from "react-icons/md";

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center flex justify-center my-10">
                <Link to={'/'}><h2 className="flex items-center font-semibold text-2xl gap-2 text-center"><MdArrowCircleLeft></MdArrowCircleLeft> Back to home</h2></Link>
            </div>
            <img className="w-[80%] mx-auto" src="https://i.ibb.co/sqDDgjy/404.gif" alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Error;