import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const newUser = {
                    name, email, password, creationTime: result.user.metadata.creationTime,
                    lastSignInTime: result.user.metadata.lastSignInTime
                }

                fetch('https://coffee-store-server-site-3df79a1mu-tanjil-ahameds-projects.vercel.app/user', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 my-10">
                <div className="w-full mx-auto py-10">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Account</h1>
                    </div>
                    <div className="card   flex-shrink-0 xl:w-[30%] w-[90%] md:w-1/2 lg:w-[40%] mt-5 mx-auto shadow-2xl bg-base-100">
                        <form onSubmit={handleCreateUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create account</button>
                            </div>
                            <p className="text-xl tex-center">Already have account  <Link className="font-bold" to={'/login'}>login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;