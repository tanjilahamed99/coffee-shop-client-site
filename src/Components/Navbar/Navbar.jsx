import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/jMqc8MM/15.jpg')] flex flex-col justify-center lg:flex-row items-center lg:justify-around bg-cover bg-no-repeat py-2" >

            <div className="flex justify-center lg:gap-10 items-center ">
                <img className="w-16" src='https://i.ibb.co/XyHPtNc/logo1.png' alt="" />
                <h2 className="text-white font-bold text-2xl lg:text-4xl">Espresso Emporium</h2>
            </div>
            <div className="flex gap-10 text-white text-2xl">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/signup"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Registration
                </NavLink>

                <NavLink
                    to="/users"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Users
                </NavLink>

                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Login
                </NavLink>

            </div>
        </div>
    );
};

export default Navbar;