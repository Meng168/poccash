import DatabaseIcon from "./icons/DatabaseIcon";
import PhoneRegularIcon from "./icons/PhoneRegularIcon";
import VectorIcon from "./icons/VectorIcon";

const Featured = () => {
    return (
        <div className="pt-[80px] pr-[87.5px] pb-[65px] pl-[241px] bg-white h-[400px] w-[1728px]">
            <div className="pl-[43px] pr-[60.3]">
                <h3 className="text-color-primary text-[36px] font-bold leading-[56px] text-center mb-[46px] w-[476px] ml-[315px] inline-flex align-baseline">Features extra that useful</h3>
                <div className="flex flex-row space-x-[24px]">
                    <div className='flex flex-row w-[416px] pr h-[153px]'>
                        <DatabaseIcon />
                        <div className='pt-[28px] pb-[32px]'>
                            <h5 className='text-color-primary text-font-21 font-semibold leading-[33px] mb-[8px] ml-[18px]'>Export Data</h5>
                            <p className='text-color-gray text-font-16 font-medium leading-[24px] ml-[17px]'>Our webpage can export your <br />data from our page into an excel .</p>
                        </div>
                    </div>
                    <div className='flex flex-row w-[416px] h-[153px]'>
                        <PhoneRegularIcon />
                        <div className='pt-[28px] pb-[32px]'>
                            <h5 className='text-color-primary text-font-21 font-semibold leading-[33px] mb-[8px] ml-[15px]'>Progressive Webpage</h5>
                            <p className='text-color-gray text-font-16 font-medium leading-[24px] ml-[14px]'>User can add the webpage to <br />their homescreen on mobile</p>
                        </div>
                    </div>
                    <div className='flex flex-row w-[416px] h-[153px]'>
                        <VectorIcon />
                        <div className='pt-[28px] pb-[32px]'>
                            <h5 className='text-color-primary text-font-21 font-semibold leading-[33px] mb-[8px] ml-[15px]'>Pie Chart</h5>
                            <p className='text-color-gray text-font-16 font-medium leading-[24px] ml-[14px]'>User can also see theire <br />transaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;