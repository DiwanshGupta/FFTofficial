"use client"
import AddSubjectForm from "@/app/components/AddDataForm";
import SubjectsCard from "@/app/components/SubjectsCard";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const Subjects = () => {
    const [showAddSubjectForm,setShowAddSubjectForm] = useState(false);

    const handleAddSubject = () =>{
        setShowAddSubjectForm(true);
    };
    const handleCreateSubject = () =>{};

    return <>
        {!showAddSubjectForm &&
            <section className="py-8 w-full">
                {/**up */}
                <div className="flex items-center justify-center max-w-3xl mx-auto my-4 pb-12">
                    <h1 className="text-4xl text-yellow-500">What Would You Like To Learn Today?</h1>
                </div>
                <div className="flex max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full mb-8">
                        <div className="flex flex-col md:flex-row">
                            <div className=" mx-2 my-2">
                                <h1 className="text-xl text-yellow-500">Categories</h1>
                                <input type="text" className="rounded-md py-1 px-4"/>
                            </div>
                            <div className="mx-2 my-2">
                                <h1 className="text-xl text-yellow-500">Language</h1>
                                <input type="text" className="rounded-md py-1 px-4"/>
                            </div>
                            <button className=" h-10 px-2 mx-2 my-2 md:mt-8 border rounded-lg text-xl text-yellow-500">Search</button>
                        </div>
                        {/**Only visible to Teachers */}
                        <div 
                            className=" flex items-center border border-yellow-500 rounded-lg cursor-pointer px-2 py-1 my-4 mx-2"
                            onClick={handleAddSubject}
                        >
                            <span className="text-2xl text-yellow-500">Add New Subject&nbsp;</span>
                            <BiPlus className="text-4xl text-yellow-700 cursor-pointer"/>
                        </div>
                    </div>
                </div>
                {/**down */}
                <div className="flex items-center justify-center my-4">
                    <div>
                        <h1 className="my-8 text-2xl text-white">Found {"'n'"} results</h1>
                        {/**Cards */}
                        <div className=" grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-between">
                            <SubjectsCard img={'/pexels-agung-pandit-wiguna-3401403.jpg'} subjectName={'Subject'} language={'English'}/>
                            <SubjectsCard img={'/pexels-agung-pandit-wiguna-3401403.jpg'} subjectName={'Subject'} language={'English'}/>
                            <SubjectsCard img={'/pexels-agung-pandit-wiguna-3401403.jpg'} subjectName={'Subject'} language={'English'}/>
                            <SubjectsCard img={'/pexels-agung-pandit-wiguna-3401403.jpg'} subjectName={'Subject'} language={'English'}/>
                            <SubjectsCard img={'/pexels-agung-pandit-wiguna-3401403.jpg'} subjectName={'Subject'} language={'English'}/>
                            <SubjectsCard img={'/pexels-agung-pandit-wiguna-3401403.jpg'} subjectName={'Subject'} language={'English'}/>
                        </div>
                    </div>
                </div>
            </section>
        }

        {showAddSubjectForm && 
            <section className="w-full h-screen">
                <div className="w-full h-screen relative bg-gray-900 border blur-3xl"></div>
                <div className=" absolute top-0 right-0.5 left-0.5 flex item-center justify-center my-64 border max-w-2xl mx-auto rounded-md bg-gray-300/90">
                    <div className="py-4 opacity-100">
                        <span className="text-4xl underline underline-offset-4">Add New subject</span>
                        <form className="mt-8">
                            <label>
                                <span className="text-xl">Subject Name<br /></span>
                                <input type="text" className="px-1 py-1 my-1 w-full rounded-md"/>
                            </label>
                            <label>
                                <span className="text-xl">Total Units<br /></span>
                                <input type="number" className="px-1 py-1 my-1 w-full rounded-md"/>
                            </label>
                            <label>
                                <span className="text-xl">Language<br /></span>
                                <input type="text" className="px-1 py-1 my-1 w-full rounded-md"/>
                            </label>
                            <label>
                                <span className="text-xl">Image<br /></span>
                                <input type="file" className="px-1 py-1 my-1 w-full rounded-md"/>
                            </label>
                            <div className="flex items-center mt-8">
                                <button className="border border-yellow-600 px-2 py-1 mx-1 rounded-md bg-[#FEAF05] hover:bg-transparent hover:text-black shadow-xl" onClick={handleCreateSubject}>Create</button>
                                <button className="border border-yellow-600 px-2 py-1 mx-1 rounded-md bg-[#FEAF05] hover:bg-transparent hover:text-black shadow-xl" onClick={()=>{setShowAddSubjectForm(false)}}>Cancle</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        }
    </>
};
export default Subjects;