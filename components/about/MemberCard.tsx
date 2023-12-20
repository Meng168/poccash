import Image from "next/image";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

interface Props {
    img: string;
    name: string;
    member?: string;
    des: string;
}

const MemberCard = ({
    img,
    name,
    member =  "Member",
    des
}: Props) => {
    return (
        <div className="bg-white w-[310px] flex flex-col justify-start items-center h-[503px] rounded-[20px]">
            <Image 
                src={img}
                alt="chan-sokheang"
                sizes="100vw"
                width={0}
                height={0}
                className="rounded-full mt-[16px] w-[229px] h-[229px] object-cover"
            />
            <div className="my-[26px]">
                <h6 className="text-color-primary text-center text-font-25 font-semibold leading-[32px]">{name}</h6>
                <div className="text-color-gray text-center text-font-15 font-medium leading-[32px]">
                    {member}
                </div>
                <p className="text-color-secondary text-center text-font-18 font-normal leading-[36.5px]">
                    {des}
                </p>
            </div>
            <ul className="flex flex-row justify-start items-center space-x-[41px]">
                <li><a href="https://web.facebook.com/digitalgovernmentcommittee" target="_blank" rel="noopener noreferrer"><InstagramIcon className="w-9 h-9" /></a></li>
                <li><a href="https://web.facebook.com/digitalgovernmentcommittee" target="_blank" rel="noopener noreferrer"><TwitterIcon className="w-9 h-9" /></a></li>
                <li><a href="https://web.facebook.com/digitalgovernmentcommittee" target="_blank" rel="noopener noreferrer"><FacebookIcon className="w-9 h-9" /></a></li>
            </ul>
        </div>
    )
}

export default MemberCard
