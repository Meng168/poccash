import Image from "next/image"
import ProfileImage from 'assets/auth/profile.png'
import CameraImage from 'assets/auth/camera.png'
import Link from "next/link"
import { Button, Checkbox } from "@mui/material"
import Input from "@/components/Input"
import Logo1 from "@/components/icons/Logo1"
import ArrowDown from "@/components/icons/ArrowDown"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Register = () => {
    return (
        <div className="w-[1728px] h-[1112px] flex flex-row">
            <div className="bg-color-primary min-w-[790px] flex flex-col items-center pr-3">
                <div className="w-[460px] mt-[76px] flex flex-row items-center justify-center relative h-[96px] flex-shrink-0 bg-white rounded-[20px]">
                    <Logo1 />
                </div>
                <h2 className="text-white text-[40px] font-medium mb-[72px] leading-[60px] mt-[88px] ml-[10.5px] pr-[1.5px]">Create an account</h2>
                <div className="relative">
                    <div className="w-[248px] -ml-[24px] shadow-xl h-[242px] bg-white rounded-full relative overflow-hidden">
                        <div className="w-[249px] rounded-full border-[8px] border-white/50 bg-opacity-80 h-[243px] transform absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                        <Image
                            alt="logo"
                            src={ProfileImage}
                            className="h-[242px] w-[248px] object-cover"
                            sizes="100vw"
                        />
                    </div>
                    <div className="w-[40px] flex items-center justify-center h-[40px] rounded-full bg-white absolute -bottom-3 right-10 z-10">
                        <Image
                            alt="logo"
                            src={CameraImage}
                            className="h-[18px] w-[22.69px] object-cover"
                            sizes="100vw"
                        />
                    </div>
                </div>
                <div className="mt-[64px] text-white text-[16px] leading-[24px]">
                    Already have an ccount? <Link href="/signin" className="relative before:absolute before:content-[''] before:bottom-1 before:left-0 before:right-0 before:w-full before:h-[0.1px] before:bg-white">Log in </Link>
                </div>
            </div>
            <div className="bg-white w-[720px] flex items-start">
                <div className="pt-[182px] pl-[138px]">
                    <h2 className="text-color-primary text-font-30 font-semibold leading-[19.6px] mb-[26px]">Personal</h2>
                    <form>
                        <div className="flex flex-col w-[534px]">
                            <div className="mb-[12px]">
                                <Input 
                                    label="First name"
                                    id="first_name"
                                    placeholder="Enter your first name"
                                    type="text"
                                    required
                                    classNameLabel="block mb-[1.5px] text-[20px] leading-[30px] text-color-secondary"
                                    classNameInput="placeholder:text-font-16 text-font-16"
                                />
                            </div>
                            <div className="mb-[22px]">
                                <Input 
                                    label="Last name"
                                    id="last_name"
                                    placeholder="Enter your last name"
                                    type="text"
                                    required
                                    classNameLabel="block mb-[1.5px] text-[20px] leading-[30px] text-color-secondary"
                                    classNameInput="placeholder:text-font-16 text-font-16"
                                />
                            </div>
                            <div className="flex flex-row mb-[12px]">
                                <div className="flex flex-col">
                                    <label htmlFor="first_name" className="block mb-[1.5px] text-[20px] leading-[30px] text-color-secondary">Gender</label>
                                    <button className="text-color-gray justify-between w-[195px] h-[56px] font-normal bg-white border border-[#E1E9EE] text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 pl-[24px] pr-2.5 pt-[15px] pb-[12px] focus:ring-1 focus:outline-none py-2.5 text-center inline-flex items-center" type="button">
                                        Custom
                                        <ArrowDown />
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <label htmlFor="first_name" className="block mb-[1.5px] text-[20px] pl-2 leading-[30px] text-color-secondary">Date of birth </label>
                                    <div className="flex items-center">
                                        <button className="text-color-gray ml-[11px] justify-between w-[100px] h-[56px] bg-white border border-[#E1E9EE] text-font-16 rounded-[12px] focus:ring-blue-500 focus:border-blue-500 pl-[14px] pr-2.5 pt-[15px] pb-[12px] focus:ring-1 focus:outline-none font-normal py-2.5 text-center inline-flex items-center" type="button">
                                            MM
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Icons" clip-path="url(#clip0_1_352)">
                                                    <path id="Vector" d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="#93A1AA" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_352">
                                                        <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                        <button className="text-color-gray ml-[13px] justify-between w-[100px] h-[56px] bg-white border border-[#E1E9EE] text-font-16 rounded-[12px] focus:ring-blue-500 focus:border-blue-500 pl-[14px] pr-2.5 pt-[15px] pb-[12px] focus:ring-1 focus:outline-none font-normal py-2.5 text-center inline-flex items-center" type="button">
                                            DD
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Icons" clip-path="url(#clip0_1_352)">
                                                    <path id="Vector" d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="#93A1AA" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_352">
                                                        <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                        <button className="text-color-secondary ml-[15px] justify-between w-[100px] h-[56px] bg-white border border-[#E1E9EE] text-font-16 rounded-[12px] focus:ring-blue-500 focus:border-blue-500 pl-[14px] pr-2.5 pt-[15px] pb-[12px] focus:ring-1 focus:outline-none font-normal py-2.5 text-center inline-flex items-center" type="button">
                                            YYYY
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Icons" clip-path="url(#clip0_1_352)">
                                                    <path id="Vector" d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="#93A1AA" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_352">
                                                        <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[7px]">
                                <Input 
                                    label="Email Address"
                                    id="email_address"
                                    placeholder="Enter your email address"
                                    type="email"
                                    required
                                    classNameLabel="block mb-[3px] text-[20px] leading-[30px] text-color-secondary"
                                    classNameInput="placeholder:text-font-16 text-font-16"
                                />
                            </div>
                            <div className="mb-[17px]">
                                <Input 
                                    label="Password"
                                    id="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    required
                                    classNameLabel="block text-[20px] leading-[30px] text-color-secondary"
                                    classNameInput="placeholder:text-font-16 text-font-16"
                                />
                            </div>
                            <div className="mb-[9px]">
                                <Input 
                                    label="Confirm your Password"
                                    id="c_password"
                                    placeholder="Enter confirm your password"
                                    type="password"
                                    required
                                    classNameLabel="block text-[20px] leading-[30px] text-color-secondary"
                                    classNameInput="placeholder:text-font-16 text-font-16"
                                />
                            </div>
                            <div className="mb-[20px]">
                                <p className="text-color-gray leading-[24px] text-[16px] pb-2">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                            </div>
                            <div className="flex items-center space-x-[8px] mb-[11px]">
                                <Checkbox
                                    {...label}
                                    defaultChecked
                                    sx={{
                                        color: 'common.primary',
                                        '&.Mui-checked': {
                                            color: 'common.primary',
                                        },
                                    }}
                                    className="!p-0"
                                    id="checked-checkbox"
                                />
                                <label htmlFor="checked-checkbox" className="text-[16px] text-color-secondary leading-[24px]">Show password</label>
                            </div>
                            <div className="ml-auto mb-[8px]">
                                <Button variant="text" className="!bg-color-primary normal-case font-medium text-font-25 !text-white w-[259px] h-[64px]">Create an account</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
