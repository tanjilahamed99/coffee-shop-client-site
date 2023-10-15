const LittleBanner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10
         mx-auto lg:grid-cols-4 text-center lg:px-32 items-center py-10 bg-[#ECEAE3]">

            {/* first card */}
            <div className="space-y-3 ">
                <img className="w-[70px] h-[70px] mx-auto" src="https://i.ibb.co/44xBR6y/1.png" alt="" />
                <h2 className="font-semibold text-3xl">Awesome Aroma</h2>
                <p className="text-[#1B1A1A]">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>

            {/* secant card */}
            <div className="space-y-3 ">
                <img className="w-[70px] h-[70px] mx-auto" src="https://i.ibb.co/GkKZgkx/2.png" alt="" />
                <h2 className="font-semibold text-3xl">High Quality</h2>
                <p className="text-[#1B1A1A]">We served the coffee to you maintaining the best quality</p>
            </div>

            {/* third card */}
            <div className="space-y-3 ">
                <img className="w-[70px] h-[70px] mx-auto" src="https://i.ibb.co/gSFb1JS/3.png" alt="" />
                <h2 className="font-semibold text-3xl">Pure Grades</h2>
                <p className="text-[#1B1A1A]">The coffee is made of the green coffee beans which you will love</p>
            </div>

            {/* four card */}
            <div className="space-y-3 ">
                <img className="w-[70px] h-[70px] mx-auto" src="https://i.ibb.co/nRfzLxJ/4.png" alt="" />
                <h2 className="font-semibold text-3xl">Proper Roasting</h2>
                <p className="text-[#1B1A1A]">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>

        </div>
    );
};

export default LittleBanner;