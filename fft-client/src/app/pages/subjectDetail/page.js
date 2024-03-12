"use client"
import DisplayVideo from "@/app/components/DisplayVideo";
import Link from "next/link";
import { useState } from "react";
import { BiBook, BiBookOpen, BiPlus } from "react-icons/bi";
import { FaHandPaper, FaYoutube } from "react-icons/fa";

const units = [
    {
        title:'title1',
        topics:[
            {
                topicName:"topic1",
                solution:"https://www.youtube.com/embed/Rbr6KhpiGRo?si=tvtdEifRILC19IZP",
                notes:"",
                mustDo:"",
                mostRepeated:"",
            },
            {
                topicName:"topic2",
                solution:"https://www.youtube.com/embed/evy-ZZVEnzI?si=JhFt6-oMgKNnsIuh",
                notes:"",
                mustDo:"",
                mostRepeated:"",
            },
            {
                topicName:"topic3",
                solution:"https://www.youtube.com/embed/evy-ZZVEnzI?si=JhFt6-oMgKNnsIuh",
                notes:"",
                mustDo:"",
                mostRepeated:"",
            }
        ],
        notes:5
    },
    {
        title:'title2',
        topics:[
            {
                topicName:"topic1",
                solution:"",
                notes:"",
                mustDo:"",
                mostRepeated:"",
            },
            {
                topicName:"topic2",
                solution:"",
                notes:"",
                mustDo:"",
                mostRepeated:"",
            },
            {
                topicName:"topic3",
                solution:"",
                notes:"",
                mustDo:"",
                mostRepeated:"",
            }
        ],
        notes:5
    },
]

const subjectDetail = ({subjectName}) => {
    const [showAllUnits,setShowAllUnits] = useState(true);
    const [showUnit,setShowUnit] = useState(null);
    const [showUnit2,setShowUnit2] = useState(false);
    const [showVideo,setShowVideo] = useState(false);
    const [videoLink,setVideoLink] = useState('');
    const [currentTopic,setCurrentTopic] = useState('');

    const handleVideoClick = (link,topic)=>{
        setShowVideo(true);
        setVideoLink(link);
        setCurrentTopic(topic);
        // window.location.reload();
    };

    return <>
        <section className="py-8 w-full">
            <div className="flex">
                <div className="w-1/2">
                    <h1 className="text-5xl text-yellow-600 text-center">{subjectName ? subjectName : 'Subject Name'}</h1>
                    <div className="flex flex-col md:mx-4">
                        <div className="my-8 pt-10 items-center justify-center">
                            <p className="text-xl">"Step into the immersive journey of learning as we delve into the intricate details of each unit, accompanied by comprehensive notes to unravel the depths of our subject."</p>
                        </div>
                        <div className=" w-full">
                            <div className=" py-3 px-2 flex items-center justify-between w-full border rounded-t-md cursor-pointer" onClick={() => {if(showAllUnits == true){setShowAllUnits(false)}else{(true)}}}>
                                <h1 className="text-xl uppercase">All Units</h1>
                                <BiPlus 
                                    className=" cursor-pointer text-3xl" 
                                    onClick={() => {
                                        if(showAllUnits == true){setShowAllUnits(false)}else{(true)}
                                    }}
                                />
                            </div>
                            {showAllUnits && 
                                <div className="border">
                                    {units && units.map((unit,index)=>(
                                        <div key={index}>
                                            <div className="flex items-center justify-between border border-b-2 border-t-0 w-full px-5 py-1 my-2">
                                                <span className="text-xl">Unit{index+1}</span>
                                                <span className="text-lg">{units[index].title}</span>
                                                <div className="flex items-center justify-center border px-2 w-1/4">
                                                    (0/{unit.topics.length})
                                                </div>
                                                <BiPlus className="cursor-pointer text-3xl" 
                                                    onClick={() => {
                                                        setShowUnit(index)
                                                        if(showUnit2==false){setShowUnit2(true)}else{setShowUnit2(false)}
                                                        if(showUnit != index){setShowUnit2(true)}
                                                    }}
                                                />
                                            </div>
                                            {/**Tutotial details */}
                                            {showUnit==index && showUnit2 &&
                                                <div className="flex items-center justify-between border border-b-2 border-t-0 w-full px-5">
                                                    <table className="w-full my-2">
                                                        <thead className="">
                                                            <tr className=" text-lg">
                                                                <td>S.No</td>
                                                                <td>Topic</td>
                                                                <td>Solution</td>
                                                                <td>Notes</td>
                                                                <td>Must Do</td>
                                                                <td>MostRepeated</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {unit.topics && unit.topics.map((topic,i)=>(
                                                                <tr className=" w-full my-2">
                                                                    <td className="border px-1 text-md text-center">{i+1}.</td>
                                                                    <td className="border px-1 text-md">{topic.topicName}</td>
                                                                    <td className="border px-4 text-md" ><Link href={'#'} onClick={()=> handleVideoClick(topic.solution,topic.topicName)}><FaYoutube /></Link></td>
                                                                    <td className="border px-4 text-md"><Link href={topic.notes}><BiBook /></Link></td>
                                                                    <td className="border px-4 text-md"><Link href={topic.mustDo}><BiBookOpen /></Link></td>
                                                                    <td className="border px-4 text-md"><Link href={topic.mostRepeated}><BiBook /></Link></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            }
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    {showVideo && videoLink && <DisplayVideo link={videoLink} topic={currentTopic}/>}
                </div>
            </div>
        </section>
    </>
};
export default subjectDetail;
