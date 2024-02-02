import PropTypes from 'prop-types';
import { FaPen, FaRegEye } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const DisplayCoffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, photo } = coffee;

    const handleDeleteCoffee = _id => {

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

                fetch(`https://coffee-store-server-site.vercel.app/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-10 justify-around bg-[#F5F4F1] py-10 px-5 rounded-lg'>
            <img className='w-[200px] h-[200px]' src={photo} alt="" />
            <div className='flex flex-row lg:flex-col gap-3'>
                <h2 className='font-semibold text-xl'>Name: <span className='text-[#5C5B5B]'>{name}</span></h2>
                <h2 className='font-semibold text-xl'>Chef: <span className='text-[#5C5B5B]'>{chef}</span></h2>
                <p className='font-semibold text-xl'>Price: <span className='text-[#5C5B5B]'>190</span>TK</p>
            </div>
            <div className='flex gap-4 flex-row lg:flex-col'>
                <Link to={`/details/${_id}`}>
                    <div className='bg-[#D2B48C] p-3 rounded-lg'>
                        <FaRegEye className='text-white'></FaRegEye>
                    </div>
                </Link>
                <Link className='' to={`/update/${_id}`}>
                    <div className='bg-[#3C393B] p-3 rounded-lg'>
                        <FaPen className='text-white'></FaPen>
                    </div>
                </Link>
                <div onClick={() => handleDeleteCoffee(_id)} className='bg-[#EA4744] p-3 rounded-lg'>
                    <AiFillDelete className='text-white'></AiFillDelete>
                </div>
            </div>
        </div>
    );
};

DisplayCoffee.propTypes = {
    coffee: PropTypes.object,
    setCoffees: PropTypes.func,
    coffees: PropTypes.array
};

export default DisplayCoffee;