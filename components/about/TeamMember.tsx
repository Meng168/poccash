import MemberCard from "./MemberCard";
import { members } from "./members-data";

const TeamMember = () => {
    return (
        <div className="px-[177px] pt-[255px]">
            <h3 className="text-color-primary text-[36px] font-normal text-center">~&nbsp;&nbsp;&nbsp;Team Member ~</h3>    
            <p className="text-color-secondary font-normal text-[48px] text-center">Our Member is ready to help you !</p>
            <div className="border-b border-color-gray w-[878px] mx-auto mt-[48px] mb-[66px]" />
            <div className="flex flex-row space-x-[42px] px-2">
                {members.map((member) => (
                    <MemberCard 
                        img={member.img}
                        key={member.name}
                        name={member.name}
                        des={member.des}
                    />
                ))}
            </div>
        </div>
    )
}

export default TeamMember;