"use client"
import { BiPlus } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import { LiaLinkedin } from "react-icons/lia";
// import { UseDispatch,useDispatch,useSelector } from "react-redux";

const Profile = () => {
    // const dispatch = useDispatch();
    // const user = useSelector((state)=> state.auth.user);

    // console.log("User = ",user)
    return <>
        <section className="flex w-full max-w-7xl mx-auto mt-36 mb-16 shadow-2xl transition-all h-screen">
            <div className="flex flex-col w-1/3 mr-8 shadow-lg">
                <div className="flex flex-col w-full h-1/2 mb-8 mt-2 shadow-lg">
                    <div className="">
                        <img src={'/default-user.png'} alt="profileImg" className=" h-28 w-28 invert mx-auto rounded-full"/>
                    </div>
                    <div className="flex flex-col items-center mx-auto mt-2">
                        <span className="text-xl font-bold">Ritik Kumar</span>
                        <span className="text-lg font-serif">Full Stack web Developerr</span>
                        <span className="text-lg font-medium">A-123 xyz,Delhi india.</span>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full shadow-lg px-2">
                    <span className='text-2xl font-semibold'>Social Handles :</span>
                    <div className=" flex flex-col font-mono pt-4">
                        <span className="flex items-center justify-between border w-full py-1 px-1">
                            <span className="flex items-center justify-start text-lg"><FaWhatsapp />&nbsp;WhatsApp</span>
                            <BiPlus className="text-xl"/>
                        </span>
                        <span className="flex items-center justify-between border w-full py-1 px-1">
                            <span className="flex items-center justify-start text-lg"><FaLinkedin />&nbsp;Linkedin</span>
                            <BiPlus className="text-xl"/>
                        </span>
                        <span className="flex items-center justify-between border w-full py-1 px-1">
                            <span className="flex items-center justify-start text-lg"><FaInstagram /> &nbsp;InstaGram</span>
                            <BiPlus className="text-xl"/>
                        </span>
                        <span className="flex items-center justify-between border w-full py-1 px-1">
                            <span className="flex items-center justify-start text-lg"><FaFacebook />&nbsp;Facebook</span>
                            <BiPlus className="text-xl"/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full shadow-lg">
                <div className="flex flex-col w-full h-1/2 mb-8 shadow-lg px-4 py-4">
                    <span className="text-2xl font-semibold">User Details :</span>
                    <div className="flex">
                        <div className="flex flex-col w-full mr-4">
                            <span className="flex items-center justify-between border-b w-full mx-2 text-xl font-serif py-4">
                                FullName<span className="text-lg font-thin text-black/60">{"Ritik Kumar"}</span>
                            </span>
                            <span className="flex items-center justify-between border-b w-full mx-2 text-xl font-serif py-4">
                                Phone<span className="text-lg font-sans text-black/60">{"+91 9310429524"}</span>
                            </span>
                            <span className="flex items-center justify-between border-b w-full mx-2 text-xl font-serif py-4">
                                Email<span className="text-lg font-thin text-black/60">{"ritik123@gmail.com"}</span>
                            </span>
                        </div>
                        <div className="flex flex-col w-full border-l">
                            <span className="flex items-center justify-between border-b w-full mx-2 text-xl font-serif py-4">
                                Collage<span className="text-sm font-thin text-black/60">{"Sirifort institute of management studies, rohini-25"}</span>
                            </span>
                            <span className="flex items-center justify-between border-b w-full mx-2 text-xl font-serif py-4">
                                Semester<span className="text-lg font-thin text-black/60">{"3rd"}</span>
                            </span>
                            <span className="flex items-center justify-between border-b w-full mx-2 text-xl font-serif py-4">
                                Branch<span className="text-lg font-thin text-black/60">{"XYZ"}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-1/2 mb-8 shadow-lg px-4 py-4">
                    <span className="text-2xl font-semibold">Activity :</span>
                </div>
            </div>
        </section>
    </>
};
export default Profile;