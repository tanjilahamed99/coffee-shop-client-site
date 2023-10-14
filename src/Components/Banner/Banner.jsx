const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/3kNpqB1/3.png')] flex bg-cover bg-center bg-no-repeat h-[550px]">
            <div className="w-1/2"></div>
            <div className=" w-1/2 mx-auto md:mt-40 space-y-4">
                <h2 className="font-bold text-5xl text-white">Would you like a Cup of Delicious Coffee?</h2>
                <p className="font-normal text-white pr-10">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia
                    back!! Your companion of every moment!!! Enjoy the beautiful moments and
                    make them memorable.</p>
                <button className="btn bg-[#E3B577] hover:btn-outline hover:bg-black">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;