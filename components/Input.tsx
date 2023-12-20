'use client';

import { twMerge } from "tailwind-merge";
import EyeHide from "./icons/EyeHide";

// import {
//     FieldErrors,
//     FieldValues,
//     UseFormRegister
// } from "react-hook-form";

interface Props {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    //register: UseFormRegister<FieldValues>,
    //errors: FieldErrors
    placeholder?: string;
    classNameLabel?: string;
    classNameInput?: string;
    eye?: boolean;
}

const Input: React.FC<Props> = ({
    id,
    label,
    type = "text",
    disabled,
    //register,
    //required,
    //errors,
    placeholder,
    classNameLabel,
    classNameInput,
    eye
}) => {
    return (
        <>
            {eye ? (
                <div className="flex flex-row justify-between">
                    <label
                        htmlFor={id}
                        className={classNameLabel}
                    >
                        {label}
                    </label>
                    <button type="button" title="toggle-password" className="flex text-font-18 font-normal leading-normal flex-row space-x-[8px] items-center text-color-gray">
                        <EyeHide />
                        <span>Hide</span>
                    </button>
                </div>
            ) : (
                <label
                    htmlFor={id}
                    className={classNameLabel}
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                disabled={disabled}
                //{...register(id, { required })}
                placeholder={placeholder}
                type={type}
                className={twMerge(`first-letter:
                    bg-white 
                    placeholder:!text-color-gray
                    placeholder:leading-normal 
                    placeholder:font-normal
                    border 
                    border-[#E1E9EE] 
                    text-color-secondary 
                    rounded-[12px] 
                    focus:ring-blue-500 
                    focus:border-blue-500 
                    h-[56px] 
                    w-full 
                    pt-[15px] 
                    pr-[24px] 
                    pb-[18px] 
                    pl-[24px] 
                    flex 
                    items-center 
                    self-stretch
                `, classNameInput)}
            />
        </>
    );
}

export default Input;
