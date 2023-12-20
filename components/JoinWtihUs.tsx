'use client'

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowRight from "./icons/ArrowRight";
import { Roboto } from "next/font/google";

const roboto = Roboto({ 
    weight: ['100', '300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const JoinWithUs = () => {
    const router = useRouter()
    return (
        <div className="w-[1728px] h-[352px] bg-white pt-[92px] pr-[373px] pb-[92px] pl-[357px] border-b">
            <div className="w-[997px] h-[168px] bg-color-primary rounded-[20px]">
                <div className={`flex flex-row items-center justify-center ${roboto.className}`}>
                    <div className="flex flex-col mt-[34px] mr-[110px] justify-center text-white text-[36px] font-bold">
                        <h6>Ready to get started ?</h6>
                        <p className="text-white text-font-24 font-medium">The place that u can manage your Money</p>
                    </div>
                    <Button onClick={() => router.push('/signin')} variant="outlined" className="font-bold relative mt-[45px] uppercase text-font-16 !text-color-primary !bg-white !rounded-[10px] !w-[232px] !h-[55px]">
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-[34px]">Join with us</div>
                        <ArrowRight />
                    </Button>
                </div>
            </div>    
        </div>
    )
}

export default JoinWithUs;