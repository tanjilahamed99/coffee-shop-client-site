const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/3kNpqB1/3.png')] justify-start flex px-4 py-5 md:py-10 flex-col lg:flex-row bg-cover bg-center bg-no-repeat lg:h-[550px]">
            <div className="lg:w-1/2 hidden lg:block"></div>
            <div className=" md:w-1/2 mx-auto text-center lg:text-left lg:mt-40 space-y-4">
                <h2 className="font-bold text-4xl lg:text-5xl text-white">Would you like a Cup of Delicious Coffee?</h2>
                <p className="font-normal text-white pr-10">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia
                    back!! Your companion of every moment!!! Enjoy the beautiful moments and
                    make them memorable.</p>
                <button className="btn bg-[#E3B577] hover:btn-outline hover:bg-black">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;