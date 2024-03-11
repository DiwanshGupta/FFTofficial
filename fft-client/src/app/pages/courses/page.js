import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { HiStar } from "react-icons/hi";

const Courses = () => {
    return <>
        <section className="py-8">
            {/**up */}
            <h1 className="text-center text-2xl text-yellow-500">What Would You Like To Learn Today?</h1>
            <div className="flex items-center justify-center max-w-4xl mb-8">
                <div className="flex ">
                    <div className=" mx-2">
                        <h1 className="text-xl text-yellow-500">Categories</h1>
                        <input type="text" className="rounded-md py-1 px-4"/>
                    </div>
                    <div className="mx-2">
                        <h1 className="text-xl text-yellow-500">Language</h1>
                        <input type="text" className="rounded-md py-1 px-4"/>

                        <button className=" py-1 px-2 mx-4 border rounded-lg text-xl text-yellow-500">Search</button>
                    </div>
                </div>
            </div>
            {/**down */}
            <div className="flex items-center justify-center my-4">
                <div>
                    <h1 className="my-8 text-2xl text-white">Found {"'n'"} results</h1>
                    {/**Cards */}
                    <div className=" grid grid-cols-4 items-center justify-between">
                        <div className="relative border bg-yellow-400/50 border-yellow-500 rounded-lg shadow-lg hover:shadow-2xl mx-2 my-2">
                            <div className=" cursor-pointer">
                                <img src='/pexels-agung-pandit-wiguna-3401403.jpg' alt='course img' className=" h-52 w-68 rounded-lg"/>
                            </div>
                            <div className=" px-2 pt-2 pb-4">
                                <h1 className="text-3xl my-2">Course Title</h1>
                                <div className="flex items-center justify-between my-2">
                                    <span className="px-2 text-xl text-black/90">{'Views'}</span>
                                    <span className="px-2 text-xl text-black/90 flex items-center">4.5<HiStar /></span>
                                    <Link href='/pages/courseDetail' className="px-2 py-2 mx-2 text-lg text-white/80 border border-yellow-600 rounded-md hover:bg-transparent bg-yellow-600 hover:shadow-lg cursor-pointer">View details</Link>
                                </div>
                            </div>
                            <span className=" flex absolute items-center justify-center top-1 right-3 rounded-full px-2 py-1 bg-yellow-600"><FaStar />&nbsp;Free </span>
                        </div>
                        <div className="relative border bg-yellow-400/50 border-yellow-500 rounded-lg shadow-lg hover:shadow-2xl mx-2 my-2">
                            <div className=" cursor-pointer">
                                <img src='/pexels-agung-pandit-wiguna-3401403.jpg' alt='course img' className=" h-52 w-68 rounded-lg"/>
                            </div>
                            <div className=" px-2 pt-2 pb-4">
                                <h1 className="text-3xl my-2">Course Title</h1>
                                <div className="flex items-center justify-between my-2">
                                    <span className="px-2 text-xl text-black/90">{'Views'}</span>
                                    <span className="px-2 text-xl text-black/90 flex items-center">4.5<HiStar /></span>
                                    <Link href='/pages/courseDetail' className="px-2 py-2 mx-2 text-lg text-white/80 border border-yellow-600 rounded-md hover:bg-transparent bg-yellow-600 hover:shadow-lg cursor-pointer">View details</Link>
                                </div>
                            </div>
                            <span className=" flex absolute items-center justify-center top-1 right-3 rounded-full px-2 py-1 bg-yellow-600"><FaStar />&nbsp;Free </span>
                        </div>
                        <div className="relative border bg-yellow-400/50 border-yellow-500 rounded-lg shadow-lg hover:shadow-2xl mx-2 my-2">
                            <div className=" cursor-pointer">
                                <img src='/pexels-agung-pandit-wiguna-3401403.jpg' alt='course img' className=" h-52 w-68 rounded-lg"/>
                            </div>
                            <div className=" px-2 pt-2 pb-4">
                                <h1 className="text-3xl my-2">Course Title</h1>
                                <div className="flex items-center justify-between my-2">
                                    <span className="px-2 text-xl text-black/90">{'Views'}</span>
                                    <span className="px-2 text-xl text-black/90 flex items-center">4.5<HiStar /></span>
                                    <Link href='/pages/courseDetail' className="px-2 py-2 mx-2 text-lg text-white/80 border border-yellow-600 rounded-md hover:bg-transparent bg-yellow-600 hover:shadow-lg cursor-pointer">View details</Link>
                                </div>
                            </div>
                            <span className=" flex absolute items-center justify-center top-1 right-3 rounded-full px-2 py-1 bg-yellow-600"><FaStar />&nbsp;Free </span>
                        </div>
                        <div className="relative border bg-yellow-400/50 border-yellow-500 rounded-lg shadow-lg hover:shadow-2xl mx-2 my-2">
                            <div className=" cursor-pointer">
                                <img src='/pexels-agung-pandit-wiguna-3401403.jpg' alt='course img' className=" h-52 w-68 rounded-lg"/>
                            </div>
                            <div className=" px-2 pt-2 pb-4">
                                <h1 className="text-3xl my-2">Course Title</h1>
                                <div className="flex items-center justify-between my-2">
                                    <span className="px-2 text-xl text-black/90">{'Views'}</span>
                                    <span className="px-2 text-xl text-black/90 flex items-center">4.5<HiStar /></span>
                                    <Link href='/pages/courseDetail' className="px-2 py-2 mx-2 text-lg text-white/80 border border-yellow-600 rounded-md hover:bg-transparent bg-yellow-600 hover:shadow-lg cursor-pointer">View details</Link>
                                </div>
                            </div>
                            <span className=" flex absolute items-center justify-center top-1 right-3 rounded-full px-2 py-1 bg-yellow-600"><FaStar />&nbsp;Free </span>
                        </div>
                        <div className="relative border bg-yellow-400/50 border-yellow-500 rounded-lg shadow-lg hover:shadow-2xl mx-2 my-2">
                            <div className=" cursor-pointer">
                                <img src='/pexels-agung-pandit-wiguna-3401403.jpg' alt='course img' className=" h-52 w-68 rounded-lg"/>
                            </div>
                            <div className=" px-2 pt-2 pb-4">
                                <h1 className="text-3xl my-2">Course Title</h1>
                                <div className="flex items-center justify-between my-2">
                                    <span className="px-2 text-xl text-black/90">{'Views'}</span>
                                    <span className="px-2 text-xl text-black/90 flex items-center">4.5<HiStar /></span>
                                    <Link href='/pages/courseDetail' className="px-2 py-2 mx-2 text-lg text-white/80 border border-yellow-600 rounded-md hover:bg-transparent bg-yellow-600 hover:shadow-lg cursor-pointer">View details</Link>
                                </div>
                            </div>
                            <span className=" flex absolute items-center justify-center top-1 right-3 rounded-full px-2 py-1 bg-yellow-600"><FaStar />&nbsp;Free </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};
export default Courses;