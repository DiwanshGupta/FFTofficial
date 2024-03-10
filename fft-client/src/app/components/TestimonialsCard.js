const TestimonialsCard = ({img,name,description}) => {
    return <>
        <section>
            <div className=" py-4 mb-8 border border-yellow-400 gap-2 md:w-96 mr-2  rounded-xl">
                <div className="group m-2 px-2 flex flex-col items-center justify-center h-fit  w-[22rem]  md:w-96 rounded-xl  ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className=" flex items-center justify-center z-10 h-fit w-full overflow-hidden rounded-xl  opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                        <img
                            src={img}
                            className="animate-fade-in block h-64 w-64 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="pb-4">
                        <h1 className="font-serif text-2xl font-bold text-gray-900 shadow-xl">
                            {name}
                        </h1>
                    </div>
                    <div className=" flex items-center justify-center text-center text-md text-gray-900">
                        {description}
                    </div>
                </div>
            </div>
        </section>
    </>
};
export default TestimonialsCard;