import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const newUser = { name, email, password }

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                fetch('http://localhost:5000/user', {
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
        <div className="hero min-h-screen bg-base-200">
            <div className="w-full mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Account</h1>
                </div>
                <div className="card  flex-shrink-0 w-[30%] mt-5 mx-auto shadow-2xl bg-base-100">
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
    );
};

export default SignUp;