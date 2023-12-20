'use client'

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LaptopImage from 'assets/landing-page/home/laptop.png'
import Image from "next/image";

const Hero = () => {
    const router = useRouter()
    return (
        <div className="flex w-[1728px] h-[791px] relative">
            <div className="flex flex-col ml-[200px]">
                <h1 className="w-[670px] mt-[135px] h-[225px] text-color-secondary font-bold text-[50px] leading-normal">The easiest way to <br /> <span className="text-color-primary">manage personal</span> <br /> finances</h1>    
                <p className="text-color-gray w-[543px] mt-[14px] text-font-25 font-medium mb-[68px]">Record your personal financial <br /> transaction generate spending  report, set budget plane and make a saving for your goal.</p>
                <Button onClick={() => router.push('/signin')} variant="outlined" className="normal-case font-semibold text-font-22 !text-white !bg-color-primary !rounded-[10px] !w-[302px] !h-[69.632px]">
                    Sign In Now
                </Button>
            </div>
            <Image 
                src={LaptopImage}
                alt="laptop"
                sizes="100vw"
                className="w-[777px] absolute h-[478px] top-[149px] right-[200px]"
                priority
            />
        </div>
    )
}

export default Hero;