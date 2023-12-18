'use client'

import React from 'react';
import { twMerge } from 'tailwind-merge'

interface Props {
    type: "google" | "facebook";
    text: string;
    className?: string;
    svg: React.ReactNode;
}

export const OtherAuthButton = ({
    text,
    className,
    svg: Icon
}: Props) => {
    return (
        <button className={twMerge("bg-white border-[#C4CFD7] flex justify-center w-[568px] items-center space-x-[16px] border rounded-[40px]", className)}>
            {Icon}
            <span className="text-color-secondary">{text}</span>
        </button>
    )
}
