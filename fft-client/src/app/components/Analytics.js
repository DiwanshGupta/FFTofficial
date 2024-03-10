import { MdVideoLibrary } from "react-icons/md";
import { BiSolidBookOpen } from "react-icons/bi";
import { RiCustomerServiceLine } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
const Analytics = () => {
    return <>
        <section>
            <div className="text-black mx-4 py-4 sm:mx-8 md:mx-16 lg:mx-16 dark:bg-slate-300 mt-4 sm:mt-8 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-4 py-8 text-center font-bold">
                    <div className=" flex flex-col items-center justify-center py-4 text-3xl sm:border-t-2 border-r-0 sm:border-r-2 border-b-2 border-l-0 sm:border-l-2">
                        <MdVideoLibrary className=" text-5xl mb-4"/>
                        <span>Daily Live<br /></span>
                        <span className="font-normal text-lg text-cyan-950">Interactive classes</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-4 text-3xl sm:border-t-2 sm:border-r-2 border-b-2 border-l-0 sm:border-l-2">
                        <BiSolidBookOpen className=" text-5xl mb-4"/>
                        <span>10K +<br /></span>
                        <span className="font-normal text-lg text-cyan-950">Tests, sample papers & notes
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-4 text-3xl sm:border-t-2 sm:border-r-2 border-b-2 border-l-0 sm:border-l-2">
                        <LiaCertificateSolid className=" text-5xl mb-4"/>
                        <span>100 +<br /></span>
                        <span className="font-normal text-lg text-cyan-950">Offline centres</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-4 text-3xl sm:border-t-2 sm:border-b-2 border-r-0 border-l-0">
                        <RiCustomerServiceLine className=" text-5xl mb-4"/>
                        <span>24/7<br /></span>
                        <span className="font-normal text-lg text-cyan-950">Doubt solving sessions</span>
                    </div>
                </div>
            </div>
        </section>
    </>
};
export default Analytics;