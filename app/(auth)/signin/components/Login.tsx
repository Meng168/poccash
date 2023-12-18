import Image from "next/image"
import logo from '../public/assets/images/auth/logo.png'
import Link from "next/link"
import { OtherAuthButton } from "./OtherAuthButton";
import Google from "@/components/icons/Google";
import Facebook from "@/components/icons/Facebook";
import { Button } from "@mui/material";

const Login = () => {
    return (
        <div className="min-w-[1728px] min-h-[1117px] w-full flex flex-row">
            <div className="bg-color-primary justify-start items-start w-full flex flex-col pr-[0.05rem]">
                <div className="w-[460px] mx-auto mt-[83px] flex flex-row items-center justify-center relative h-[96px] flex-shrink-0 bg-white rounded-[20px]">
                    <Image
                        alt="logo"
                        src={logo}
                        className="w-[176px] h-[52px]"
                        sizes="100vw"
                    />
                </div>
                <div className="mx-auto ml-[165px] mt-[165px]">
                    <h2 className="text-white text-[40px] font-medium leading-[60px] mt-[17px]">Design with us</h2>
                    <p className="text-white text-justify w-[482px] font-normal text-font-30 mt-[17px] leading-[44.1px]">
                        We highly recommeded you to
                        use our PocCash website where
                        you can keep track of where 
                        your are spending money 
                        or where they came from every 
                        month and improve your 
                        financial
                    </p>
                </div>
            </div>
            <div className="bg-white w-full flex items-start justify-start">
                <div className="pt-[179px] pl-[190px] pr-[180px]">
                    <h2 className="text-color-primary text-[30px] font-semibold leading-[30px] mb-[48px]">Sign in</h2>
                    <div className="w-full flex flex-col space-y-[16px] items-center justify-center">
                        <OtherAuthButton
                            type="google"
                            svg={<Google />}
                            text="Continue with Google"
                            className="pt-[16.5px] pr-[155.5px] pb-[17.5px] pl-[156.5px]"
                        />
                        <OtherAuthButton
                            type="facebook"
                            svg={<Facebook />}
                            text="Continue with Facebook"
                            className="pt-[16.5px] pr-[155.5px] pb-[17.5px] pl-[156.5px]"
                        />
                    </div>
                    <div className="relative my-[48px] w-[568px]">
                        <div className="absolute inset-0 items-center flex">
                            <div className="w-full border-t-[2px] border-[#E1E9EE]" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white font-avenir px-[23px] text-font-18 text-color-gray font-normal">
                                OR
                            </span>
                        </div>
                    </div>
                    <form className="w-[568px]">
                        <div className="flex flex-col">
                            <div className="mb-[12px]">
                                <label htmlFor="email_address" className="block text-font-15 text-color-secondary">Email Address</label>
                                <input type="text" id="email_address" className="bg-gray-50 mt-[4px] -mb-[1px] placeholder:text-font-16 border border-gray-300 text-color-secondary text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 block w-full px-[24px] pt-[15px] pb-[12px]" placeholder="Enter your email address" required />
                                <span className="text-color-danger text-font-14">Error message</span>
                            </div>
                            <div className="mb-[4px]">
                                <label htmlFor="password" className="block text-font-15 text-color-secondary">Your Password</label>
                                <input type="text" id="password" className="bg-gray-50 mt-[4px] -mb-[1px] placeholder:text-font-16 border border-gray-300 text-color-secondary text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 block w-full px-[24px] pt-[15px] pb-[12px]" placeholder="Enter your password" required />
                                <span className="text-color-danger text-font-14">Error message</span>
                            </div>
                            <div className="ml-auto mb-[21px]">
                                <Link href="/forgot" className="text-color-primary text-font-15">Forgot your password</Link>
                            </div>
                            <div className="mr-auto mb-[8px]">
                                <Button variant="text" className="!bg-color-primary normal-case font-medium text-font-25 !text-white w-[304px] h-[64px] pt-[16.5px] pr-0 pb-[17.5px] pl-[0]">Sign in</Button>
                            </div>
                            <div className="text-color-secondary text-[16px] leading-[24px]">
                                Don’t have an acount? <Link href="/signup" className="relative text-color-primary before:absolute before:content-[''] before:bottom-1 before:left-0 before:right-0 before:w-full before:h-[0.1px] before:bg-color-primary">Sign up </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
