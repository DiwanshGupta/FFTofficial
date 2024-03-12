import SubjectsCard from "@/app/components/SubjectsCard";

const Subjects = () => {
    return <>
        <section className="py-8">
            {/**up */}
            <div className="flex items-center justify-center max-w-3xl my-4">
                <h1 className="text-3xl text-yellow-500">What Would You Like To Learn Today?</h1>
            </div>
            <div className="flex flex-col items-center justify-center max-w-3xl mb-8 mx-5">
                <div className="flex">
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
    </>
};
export default Subjects;