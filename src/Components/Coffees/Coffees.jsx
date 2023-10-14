import { MdCoffee } from "react-icons/md";
import { Link } from "react-router-dom";

const Coffees = () => {
    return (
        <div>
            <div className="text-center my-10">
                <p>--- Sip & Savor ---</p>
                <h2 className="my-3 font-bold text-3xl">Our Popular Products</h2>
                <Link to={'/coffee'}><button className="btn bg-[#E3B577] text-white ">
                    Add Coffee
                    <MdCoffee className="text-black"></MdCoffee>
                </button></Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {

                }
            </div>

        </div>
    );
};

export default Coffees;