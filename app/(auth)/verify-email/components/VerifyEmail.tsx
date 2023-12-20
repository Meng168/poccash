'use client'

import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import Logo4 from '@/components/icons/Logo4'

const VerifyEmail = () => {
    const router = useRouter()
    return (
        <div className="bg-[#F4F7FA] inline-flex justify-end items-center pt-[164px] pr-[497px] pb-[164px] pl-[511px] h-[1117px] w-[1728]">
            <div className="w-[720px] h-[789px] pt-[30px] pr-[77px] pl-[28px] bg-white rounded-[20px]">
                <Logo4/>
                <div className='pl-[72px] mt-[16px]'>
                    <h3 className='text-color-primary leading-normal text-[40px] font-normal mb-[4px]'>Verify Your Email</h3>
                    <p className='text-color-gray text-font-15'>Please Enter The 4 Digit Code sent to Your Email</p>
                    <form className="w-full">
                        <div className="flex flex-col">
                            <div className="mt-[62px] mb-[59px]">
                                <ul className='flex flex-row items-center justify-start space-x-[31px]'>
                                    <li className='w-[66px] h-[66px] border-[3px] leading-normal border-color-primary text-center text-color-primary text-[38px] font-medium rounded-full bg-white'>2</li>
                                    <li className='w-[66px] h-[66px] border-[3px] leading-normal border-color-primary text-center text-color-primary text-[38px] font-medium rounded-full bg-white'>2</li>
                                    <li className='w-[66px] h-[66px] border-[3px] leading-normal border-color-primary text-center text-color-primary text-[38px] font-medium rounded-full bg-white'>6</li>
                                    <li className='w-[66px] h-[66px] border-[3px] leading-normal border-color-primary text-center text-color-primary text-[38px] font-medium rounded-full bg-white'>9</li>
                                </ul>
                            </div>
                            <div className="mr-auto">
                                <Button onClick={() => router.push('/new-password')} variant="text" className="!bg-color-primary normal-case font-medium text-font-22 !text-white w-[259px] h-[64px] pt-[15px] pr-[42px] pb-[16px] pl-[43px]">Comfirm</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail
