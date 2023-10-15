import { useEffect, useState } from "react";
import { MdCoffee } from "react-icons/md";
import { Link } from "react-router-dom";
import DisplayCoffee from "../DisplayCoffee/DisplayCoffee";

const Coffees = () => {
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetch('https://coffee-store-server-site-3df79a1mu-tanjil-ahameds-projects.vercel.app/coffees')
            .then(res => res.json())
            .then(data => setCoffees(data))
    }, [])

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container  mx-auto justify-center">
                {
                    coffees.map(coffee => <DisplayCoffee coffees={coffees} setCoffees={setCoffees}
                          key={coffee._id} coffee={coffee}></DisplayCoffee>)
                }
            </div>

        </div>
    );
};

export default Coffees;