import Image from "next/image"
import LogoImage from 'assets/auth/logo.png'
import ProfileImage from 'assets/auth/profile.png'
import CameraImage from 'assets/auth/camera.png'
import Link from "next/link"
import { Button, Checkbox } from "@mui/material"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Register = () => {
    return (
        <div className="min-w-[1728px] min-h-[1112px] w-full flex flex-row h-full">
            <div className="bg-color-primary w-full flex flex-col items-center pr-3">
                <div className="max-w-[460px] w-full mt-[76px] flex flex-row items-center justify-center relative h-[96px] flex-shrink-0 bg-white rounded-[20px]">
                    <Image
                        alt="logo"
                        src={LogoImage}
                        className="w-[176px] h-[52px]"
                        sizes="100vw"
                    />
                </div>
                <h2 className="text-white text-[40px] font-medium leading-[60px] mt-[88px] ml-[10.5px] pr-[1.5px]">Create an account</h2>
                <div className="relative mt-[0.3rem]">
                    <div className="w-[248px] shadow-xl mt-[72px] h-[242px] bg-white rounded-full relative overflow-hidden">
                        <div className="w-[258px] rounded-full border-[13px] border-white/50 bg-opacity-80 h-[252px] transform absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
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
            <div className="bg-white w-full flex items-start justify-center">
                <div className="pt-[11.4rem] w-[720px] pr-0 pl-[138px]">
                    <h2 className="text-color-primary text-[30px] font-semibold leading-[30px] mb-[26px]">Personal</h2>
                    <form>
                        <div className="flex flex-col w-[534px]">
                            <div className="mb-[12px]">
                                <label htmlFor="first_name" className="block mb-[1.5px] text-[20px] leading-[30px] text-color-secondary">First name</label>
                                <input type="text" id="first_name" className="bg-gray-50 placeholder:text-font-16 border border-gray-300 text-gray-900 text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 block w-full px-[24px] pt-[15px] pb-[12px]" placeholder="Enter your first name" required />
                            </div>
                            <div className="mb-[22px]">
                                <label htmlFor="last_name" className="block mb-[1.5px] text-[20px] leading-[30px] text-color-secondary">Last Address</label>
                                <input type="text" id="last_name" className="bg-gray-50 placeholder:text-font-16 border border-gray-300 text-gray-900 text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 block w-full px-[24px] pt-[15px] pb-[12px]" placeholder="Enter your last name" required />
                            </div>
                            <div className="flex flex-row mb-[12px]">
                                <div className="flex flex-col">
                                    <label htmlFor="first_name" className="block mb-[1.5px] text-[20px] leading-[30px] text-color-secondary">Gender</label>
                                    <button className="text-color-gray justify-between w-[195px] h-[56px] bg-gray-50 border border-gray-300 text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 pl-[24px] pr-2.5 pt-[15px] pb-[12px] focus:ring-1 focus:outline-none font-medium py-2.5 text-center inline-flex items-center" type="button">
                                        Custom
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
                                <div className="flex flex-col mt-0 justify-center items-start">
                                    <label htmlFor="first_name" className="block mb-[3px] text-[20px] pl-2 leading-[30px] text-color-secondary">Date of birth </label>
                                    <div className="flex items-center">
                                        <button className="text-color-gray ml-[11px] justify-between w-[100px] h-[56px] bg-gray-50 border border-gray-300 text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 pl-[14px] pr-2.5 pt-[15px] pb-[12px] focus:ring-1 focus:outline-none font-medium py-2.5 text-center inline-flex items-center" type="button">
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
                                        <button className="text-color-gray ml-[13px] justify-between w-[100px] h-[56px] bg-gray-50 border border-gray-300 text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 pl-[14px] pr-2.5 pt-[15px] pb-[12px] focus:ring-1 focus:outline-none font-medium py-2.5 text-center inline-flex items-center" type="button">
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
                                        <button className="text-[#11000099] ml-[15px] justify-between w-[100px] h-[56px] bg-gray-50 border border-gray-300 text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 pl-[14px] pr-2.5 pt-[15px] pb-[12px] focus:ring-1 focus:outline-none font-medium py-2.5 text-center inline-flex items-center" type="button">
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
                                <label htmlFor="email_address" className="block mb-[3px] text-[20px] leading-[30px] text-color-secondary">Email Address</label>
                                <input type="text" id="email_address" className="bg-gray-50 placeholder:text-font-16 placeholder:text-gray-500 border border-gray-300 text-gray-900 text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 block w-full px-[24px] pt-[15px] pb-[12px]" placeholder="Enter your email address" required />
                            </div>
                            <div className="mb-[17px]">
                                <label htmlFor="password" className="block text-[20px] leading-[30px] text-color-secondary">Password</label>
                                <input type="text" id="password" className="bg-gray-50 placeholder:text-font-16 placeholder:text-gray-500 border border-gray-300 text-color-secondary text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 block w-full px-[24px] pt-[15px] pb-[12px]" placeholder="Enter your password" required />
                            </div>
                            <div className="mb-[9px]">
                                <label htmlFor="c_password" className="block text-[20px] leading-[30px] text-color-secondary">Confirm your Password</label>
                                <input type="text" id="c_password" className="bg-gray-50 placeholder:text-font-16 border border-gray-300 text-color-secondary text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 block w-full px-[24px] pt-[15px] pb-[12px]" placeholder="Enter confirm your password" required />
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
