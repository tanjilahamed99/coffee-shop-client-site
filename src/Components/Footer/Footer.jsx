
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
const Footer = () => {

    return (
        <footer className=" flex flex-col md:flex-row gap-10 mx-auto items-center p-10 mt-10   w-full
        bg-[url('https://i.ibb.co/fYz7JxR/13.jpg')] bg-cover bg-center bg-no-repeat ">
            <div className="lg:w-1/2">
                <img className="w-20" src="https://i.ibb.co/XyHPtNc/logo1.png" alt="" />
                <h2 className="font-semibold mt-3 text-3xl">Espresso Emporium</h2>
                <p className="my-5 text-xl">Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments,
                    to share with your best companion.</p>
                <div className="flex items-center gap-3">
                    <p><FaFacebook className="text-3xl"></FaFacebook></p>
                    <p><FaTwitterSquare className="text-3xl"></FaTwitterSquare></p>
                    <p><FaLinkedin className="text-3xl"></FaLinkedin></p>
                    <p><FaInstagram className="text-3xl"></FaInstagram></p>
                </div>
                <h2 className="font-semibold text-3xl my-5">Get in Touch</h2>
                <div className="space-y-3">
                    <p className="text-xl flex items-center gap-2"><FaPhoneAlt className=""></FaPhoneAlt> +88 01996643722</p>
                    <p className="text-xl flex items-center gap-2"><MdEmail></MdEmail> info@gmail.com</p>
                    <p className="text-xl flex items-center gap-2"><MdLocationOn></MdLocationOn> 72, Wall street, King Road, Dhaka</p>
                </div>
            </div>
            <div className="lg:w-1/2">
                <h2 className="font-semibold text-3xl">Connect with Us</h2>
                <input className="lg:w-[70%] w-[90%] h-10 px-3 rounded-lg" placeholder="name" type="text" />
                <input className="lg:w-[70%]  w-[90%] h-10 my-4 px-4 rounded-lg" type="text" placeholder="email" />
                <textarea className="textarea w-[90%] textarea-bordered lg:w-[70%] block" placeholder="Message"></textarea>
                <button className="btn btn-outline btn-accent rounded-full mt-3">Send Message</button>
            </div>
        </footer>
    );
};

export default Footer;