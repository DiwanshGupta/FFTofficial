import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1460px] mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                dynamicHeight
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[31px] md:right-[51px] bottom-0 w-[40px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 rounded-tl-lg"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 rounded-tl-lg"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div>
                    <img
                        src="/pexels-agung-pandit-wiguna-3401403.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover h-96 rounded-sm"
                    />
                    <div className="px-4 md:px-8 py-4 md:py-4 shadow-md font-oswald bg-gray-900 absolute bottom-[25px] md:bottom-[75px] left-0 text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer rounded-r-lg hover:opacity-70">
                        Join now
                    </div>
                </div>

                <div>
                    <img
                        src="/pexels-no-name-66997.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover h-96 rounded-sm"
                    />
                    <div className="px-4 md:px-8 py-4 md:py-4 shadow-md font-oswald bg-gray-900 absolute bottom-[25px] md:bottom-[75px] left-0 text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer rounded-r-lg hover:opacity-70">
                        Join now
                    </div>
                </div>

                <div>
                    <img
                        src="/pexels-stanley-morales-1454360.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover h-96 rounded-sm"
                    />
                    <div className="px-4 md:px-8 py-4 md:py-4 shadow-md font-oswald bg-gray-900 absolute bottom-[25px] md:bottom-[75px] left-0 text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer rounded-r-lg hover:opacity-70">
                        Join now
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;
