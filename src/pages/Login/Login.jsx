import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const handleLoginUser = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                const newUser = {
                    email, lastSignInTime: result.user.metadata.lastSignInTime
                }

                fetch('https://coffee-store-server-site.vercel.app/user', {
                    method: "PATCH",
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
                <div className="w-full py-10 px-5">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 xl:px-[500px] md:px-[140px] lg:px-[200px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  flex-shrink-0 xl:w-[30%] lg:w-[40%] md:w-1/2 mx-auto shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginUser} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-xl tex-center flex gap-2">New here:<Link className="font-bold" to={'/login'}>Create Account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;