import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Users = () => {
    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser)


    const handleDeleteUser = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log(_id)

                fetch(`http://localhost:5000/user/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = users.filter(user => user._id !== _id)
                            setUsers(remaining)

                        }
                    })
            }
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="overflow-x-auto my-32">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Creation Time</th>
                            <th>Last sign in</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.creationTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td className="flex items-center gap-5">
                                    <div className='bg-[#3C393B] p-3 rounded-lg'>
                                        <FaPen className='text-white'></FaPen>
                                    </div>
                                    <div onClick={() => handleDeleteUser(user._id)} className='bg-[#EA4744] p-3 rounded-lg'>
                                        <AiFillDelete className='text-white'></AiFillDelete>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Users;