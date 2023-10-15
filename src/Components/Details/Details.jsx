import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Details = () => {
    const coffeeInfo = useLoaderData()
    const { name, details, chef, supplier, taste, category, photo } = coffeeInfo;
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-[80%] w-[95%] mx-auto">
                <Link to={'/'}><p className="text-[#374151] text-2xl my-5 font-semibold flex items-center gap-2"> 
                <AiOutlineArrowLeft></AiOutlineArrowLeft>
                Back to home</p></Link>
                <div className="bg-[#F4F3F0] rounded-lg  p-10 flex flex-col md:flex-row items-center justify-center md:gap-10 gap-5 lg:gap-32">
                    <img className="w-[300px]" src={photo} alt="" />
                    <div>
                        <h2 className="text-[#331A15] font-bold text-3xl mb-6">Niceties</h2>
                        <div className="space-y-3">
                            <h2 className="font-semibold text-xl text-[#1B1A1A]">Name: <span className="font-normal text-[#5C5B5B]">{name}</span></h2>
                            <h2 className="font-semibold text-xl text-[#1B1A1A]">Chef: <span className="font-normal text-[#5C5B5B]">{chef}</span></h2>
                            <h2 className="font-semibold text-xl text-[#1B1A1A]">Supplier: <span className="font-normal text-[#5C5B5B]">{supplier}</span></h2>
                            <h2 className="font-semibold text-xl text-[#1B1A1A]">Taste: <span className="font-normal text-[#5C5B5B]">{taste}</span></h2>
                            <h2 className="font-semibold text-xl text-[#1B1A1A]">Category: <span className="font-normal text-[#5C5B5B]">{category}</span></h2>
                            <h2 className="font-semibold text-xl text-[#1B1A1A]">Details: <span className="font-normal text-[#5C5B5B]">{details}</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;