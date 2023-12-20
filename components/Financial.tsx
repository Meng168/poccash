import LaptopImage from 'assets/landing-page/home/phone.png'
import Image from "next/image";

const Financial = () => {
    return (
        <div className='w-[1728px] h-[1055px] bg-[#F4F7FA] flex flex-row'>
            <Image 
                src={LaptopImage}
                alt="laptop"
                sizes="100vw"
                className="w-[334px] h-[696.965px] mt-[179px] ml-[312px]"
            />
            <div className='flex flex-col'>
                <div className='w-[1008px] h-[218px] pl-[125px] mt-[302px]'>
                    <span className='text-color-secondary inline-flex align-top text-[70px] leading-[56px] font-bold'>Why should use</span><br />
                    <span className='text-color-primary inline-flex align-top text-[70px] -leading-[56px] font-bold'>PocCash ?</span>
                </div>
                <p className='text-font-30 ml-[120px] relative bottom-[20px] text-color-gray w-[879px] font-medium leading-normal'>
                    We highly recommeded you to use our <br />
                    PocCash website where you can keep <br />
                    track of where your are spending moeny <br />
                    or where they came from every month <br />
                    and improve your financial
                </p>
            </div>
        </div>
    )
}

export default Financial;