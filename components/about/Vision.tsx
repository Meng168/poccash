import TeamMember from "./TeamMember";
import VisionCard from "./VisionCard";

const Vision = () => {
    return (
        <div className="bg-[#F4F7FA] w-[1728px] h-[2066px] -pb-[90px]">
            <div className="pt-[156px] pl-[590px]">
                <h3 className="text-color-primary mb-[24px] text-[48px] font-bold leading-[54px]">Our Vision and Mission</h3>
                <p className='text-font-20 text-center ml-[20px] text-color-secondary w-[513px] leading-[32px] font-normal'>
                    We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. 
                </p>    
            </div>
            <div className="flex flex-row ml-[311px] mt-[95px] space-x-[116px]">
                <VisionCard 
                    title="Mission"
                    des={
                        `Building tools and providing 
                        service for user to have a good 
                        experence and keep <br />
                        tracking their financial. <br />
                        Building tools and providing 
                        service for user to have a good 
                        experence and keep <br />
                        tracking their financial.`
                    }
                />
                <VisionCard 
                    title="Vision"
                    des={
                        `Building tools and providing 
                        service for user to have a good 
                        experence and keep <br />
                        tracking their financial. <br />
                        Building tools and providing 
                        service for user to have a good 
                        experence and keep <br />
                        tracking their financial.`
                    }
                />
            </div>
            <TeamMember />
        </div>
    )
}

export default Vision;