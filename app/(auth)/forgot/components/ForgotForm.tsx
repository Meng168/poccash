'use client'

import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import Logo2 from '@/components/icons/Logo2'
import Input from '@/components/Input'

const ForgotForm = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col pt-[164px] pr-[497px] pb-[164px] pl-[511px] bg-[#F4F7FA] h-[1117px] w-[1728px]">
            <div className="w-[720px] h-[777px] pt-[39px] pr-[77px] pl-[55px] bg-white rounded-[20px]">
                <Logo2 />
                <h3 className='text-color-primary leading-normal text-[40px] font-medium mb-[4px]'>Forgot your password ?</h3>
                <p className='text-color-gray text-font-15 leading-[22.5px] w-[614px] ml-[2px] mb-[2px]'>Please, enter your e-mail address below to receive your user and a new password</p>
                <form className="w-full">
                    <div className="flex flex-col">
                        <div className="my-[40px]">
                            <Input 
                                label="Email address"
                                id="email_address"
                                placeholder="Enter your email address"
                                type="email"
                                required
                                classNameLabel='block mb-[8px] leading-normal text-font-15 text-color-secondary'
                                classNameInput='placeholder:text-font-15 text-font-15'
                            />
                        </div>
                        <div className="mr-auto mb-[8px]">
                            <Button onClick={() => router.push('/verify-email')} variant="text" className="!bg-color-primary normal-case font-medium text-font-22 !text-white !leading-normal !w-[259px] flex-shrink-0 !rounded-[5px] !h-[64px] pt-[15px] pr-[42px] pb-[16px] pl-[43px]">Reset Password</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotForm
