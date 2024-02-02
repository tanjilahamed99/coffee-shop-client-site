import { MdArrowCircleLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee)

        fetch('https://coffee-store-server-site.vercel.app/coffees', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Coffee added successful',
                        'success'
                    )
                }
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-[80%] w-[95%] mx-auto">
                <Link className="text-2xl font-medium " to={'/'}><p className="flex my-5 items-center gap-2"> <MdArrowCircleLeft></MdArrowCircleLeft> Back to home</p> </Link>

                <form onSubmit={handleAddCoffee} className=" bg-[#F4F3F0] lg:px-20 px-4 py-10">
                    <h2 className="text-center font-bold text-3xl">Add Coffee</h2>
                    <p className="text-center  lg:px-[200px] text-xl"> It is a long established fact that a reader will be distraceted by the readable  content of
                        a page when looking at its layout. The point of using Lorem Ipsum is that it hasa
                        more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <div className="grid grid-cols-2 items-center gap-5 mt-10   w-full">
                        <div className="">
                            <h2 className="text-lg">Name</h2>
                            <input required name="name" type="text" placeholder="Enter coffee name"
                                className="input input-bordered  w-full" />
                        </div>
                        <div className="">
                            <h2 className="text-lg">Chef</h2>
                            <input required name="chef" type="text" placeholder="Chef"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="">
                            <h2 className="text-lg">Supplier</h2>
                            <input required name="supplier" type="text" placeholder="Supplier"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="">
                            <h2 className="text-lg">Taste</h2>
                            <input required name="taste" type="text" placeholder="Taste"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <h2 className="text-lg">Category</h2>
                            <input required name="category" type="text" placeholder="Category"
                                className="input input-bordered  w-full" />
                        </div>
                        <div className="w-full ">
                            <h2 className="text-lg">Details</h2>
                            <input required name="details" type="text" placeholder="Details"
                                className="input input-bordered  w-full" />
                        </div>
                        <div className="w-full col-span-2">
                            <h2 className="text-lg">Photo</h2>
                            <input required name="photo" type="text" placeholder="Photo"
                                className="input input-bordered  w-full" />
                        </div>
                        <input type="submit" className="btn bg-[#E3B577] col-span-2" value="Add Coffee" />
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCoffee;