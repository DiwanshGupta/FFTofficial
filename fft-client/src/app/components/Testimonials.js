import React, { useRef, useEffect} from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollInterval;

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                container.scrollLeft += 1; // Scroll one pixel at a time
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    container.scrollLeft = 0; // Reset to the beginning when reaching the end
                }
            }, 20); // Adjust scroll speed as needed
        };

        startScrolling();

        return () => clearInterval(scrollInterval);
    }, []);

    return<>
        <section className=" max-w-6xl mx-auto px-4 border border-[#FEAF05] rounded-lg">
            <div className='flex items-center justify-center text-center text-5xl text-yellow-400 my-4'>
                Testimonials
            </div>
            <div ref={containerRef} className="flex items-center justify-between sm:overflow-y-auto scroll-container">
                <div className="">
                    <TestimonialsCard img='/testimonials/p4.jpeg' name='unknown' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                </div>
                <div className="">
                    <TestimonialsCard img='/testimonials/p7.jpeg' name='Jhon the don' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                </div>
                <div className="">
                    <TestimonialsCard img='/testimonials/p8.jpeg' name='Hana Lisen' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                </div>
                <div className="">
                    <TestimonialsCard img='/testimonials/p4.jpeg' name='unknown' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                </div>
                <div className="">
                    <TestimonialsCard img='/testimonials/p7.jpeg' name='Jhon the don' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                </div>
                <div className="">
                    <TestimonialsCard img='/testimonials/p8.jpeg' name='Hana Lisen' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                </div>
                <div className="">
                    <TestimonialsCard img='/testimonials/p4.jpeg' name='unknown' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                </div>
            </div>
        </section>
    </> 
};

export default Testimonials;