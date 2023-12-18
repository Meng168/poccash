'use client'

import Image from 'next/image'
import LogoImage from 'assets/auth/logo.png'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

const ForgotForm = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col bg-[#F4F7FA] justify-center items-center h-[1117px] w-full">
            <div className="w-[720px] h-[777px] pt-[39px] pr-[77px] pl-[55px] bg-white rounded-[20px]">
                <Image
                    alt="logo"
                    src={LogoImage}
                    className="w-[206px] h-[106px] object-contain mb-[16px]"
                    sizes="100vw"
                />
                <h3 className='text-color-primary leading-normal text-[40px] font-medium'>Forgot your password ?</h3>
                <p className='text-color-gray text-font-15'>Please, enter your e-mail address below to receive your user and a new password  </p>
                <form className="w-full">
                    <div className="flex flex-col">
                        <div className="my-[40px]">
                            <label htmlFor="email_address" className="block mb-[4px] text-font-15 text-color-secondary">Email Address</label>
                            <input type="text" id="email_address" className="bg-gray-50 placeholder:text-font-16 border border-gray-300 text-color-secondary text-md rounded-[12px] tet focus:ring-blue-500 focus:border-blue-500 block w-full px-[24px] pt-[15px] pb-[12px]" placeholder="Enter your email address" required />
                        </div>
                        <div className="mr-auto mb-[8px]">
                            <Button onClick={() => router.push('/verify-email')} variant="text" className="!bg-color-primary normal-case font-medium text-font-22 !text-white w-[259px] h-[64px] pt-[15px] pr-[42px] pb-[16px] pl-[43px]">Reset Password</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotForm
