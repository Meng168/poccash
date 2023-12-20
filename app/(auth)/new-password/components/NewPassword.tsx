'use client'

import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import Logo5 from '@/components/icons/Logo5'
import Input from '@/components/Input'

const NewPassword = () => {
    const router = useRouter()
    return (
        <div className="flex bg-[#F4F7FA] justify-center items-center h-[1117px] pb-[164px] pt-[152px] px-[514px] w-[1728px]">
            <div className="w-[720px] h-[777px] pt-[39px] pr-[57px] pl-[55px] bg-white rounded-[20px]">
                <div className='-ml-[33px] w-auto mb-[16px]'>
                    <Logo5 />
                </div>
                <h3 className='text-color-primary leading-normal text-[40px] font-normal'>Please enter a new password below</h3>
                <form className="w-full mt-[23px]">
                    <div className="flex flex-col">
                        <div className="mb-[16px] flex flex-col space-y-[4px]">
                            <Input 
                                label="New Password"
                                id="password"
                                placeholder="Enter your new password"
                                type="password"
                                required
                                classNameLabel="block mb-[4px] text-font-15 text-color-secondary"
                                classNameInput="placeholder:text-font-16 text-font-16"
                                eye
                            />
                            <span className="text-color-gray text-font-15">Use 8 or more characters with a mix of letters, numbers symbols</span>
                        </div>
                        <div className="mb-[9px] flex flex-col space-y-[4px]">
                            <Input 
                                label="Confirmed password*"
                                id="c_password"
                                placeholder="Enter your confirmed password"
                                type="password"
                                required
                                classNameLabel="block mb-[4px] text-font-15 text-color-secondary"
                                classNameInput="placeholder:text-font-16 text-font-16"
                                eye
                            />
                            <span className="text-color-danger text-font-14">Error message</span>
                        </div>
                        <div className="mr-auto mb-[8px]">
                            <Button onClick={() => router.push('/')} variant="text" className="!bg-color-primary normal-case font-medium text-font-22 !text-white w-[259px] h-[64px] pt-[15px] pr-[42px] pb-[16px] pl-[43px]">Save</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPassword
