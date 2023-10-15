import { MdArrowCircleLeft } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const UpdateCoffee = () => {
    const coffeeInfo = useLoaderData()
    const { _id, name, details, chef, supplier, taste, category, photo } = coffeeInfo;

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updateCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(updateCoffee)

        fetch(`https://coffee-store-server-site-3df79a1mu-tanjil-ahameds-projects.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Coffee update successful',
                        'success'
                    )
                }
            })
    }




    return (
        <div>
            <Navbar></Navbar>
            <div className="xl:w-[80%] w-[95%] mx-auto">
                <Link className="text-2xl font-medium " to={'/'}><p className="flex my-5 items-center gap-2"> <MdArrowCircleLeft></MdArrowCircleLeft> Back to home</p> </Link>

                <form onSubmit={handleUpdateCoffee} className=" bg-[#F4F3F0] px-4 xl:px-20 py-10">
                    <h2 className="text-center font-bold text-3xl">Update Existing Coffee Details</h2>
                    <p className="text-center xl:px-[200px] text-xl"> It is a long established fact that a reader will be distraceted by the readable  content of
                        a page when looking at its layout. The point of using Lorem Ipsum is that it hasa
                        more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-10 w-full">
                        <div className="">
                            <h2 className="text-lg">Name</h2>
                            <input required name="name" type="text" defaultValue={name} placeholder="Enter coffee name"
                                className="input input-bordered  w-full" />
                        </div>
                        <div className="">
                            <h2 className="text-lg">Chef</h2>
                            <input required name="chef" defaultValue={chef} type="text" placeholder="Chef"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="">
                            <h2 className="text-lg">Supplier</h2>
                            <input required name="supplier" defaultValue={supplier} type="text" placeholder="Supplier"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="">
                            <h2 className="text-lg">Taste</h2>
                            <input required name="taste" defaultValue={taste} type="text" placeholder="Taste"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <h2 className="text-lg">Category</h2>
                            <input required name="category" defaultValue={category} type="text" placeholder="Category"
                                className="input input-bordered  w-full" />
                        </div>
                        <div className="w-full ">
                            <h2 className="text-lg">Details</h2>
                            <input required name="details" defaultValue={details} type="text" placeholder="Details"
                                className="input input-bordered  w-full" />
                        </div>
                        <div className="w-full col-span-2">
                            <h2 className="text-lg">Photo</h2>
                            <input required name="photo" type="text" defaultValue={photo} placeholder="Photo"
                                className="input input-bordered  w-full" />
                        </div>
                        <input type="submit" className="btn bg-[#E3B577] col-span-2" value="Update Coffee" />
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateCoffee;