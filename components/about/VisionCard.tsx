import React from 'react'

interface Props {
    title: string;
    des: string;
}

const VisionCard = ({
    title,
    des
}: Props) => {
    return (
        <div className="w-[495px] pl-[76px] pr-[89px] h-[441px] bg-white rounded-[20px] shadow-[14px_24px_72px_0px_rgba(102,102,102,0.10)]">
            <h4 className="text-color-primary mb-[42.44px] inline-flex align-baseline h-[31.89px] leading-[34px] mt-[54.67px] text-[40px] font-semibold">{title}</h4>
            <div className="text-color-gray text-font-20 font-medium leading-[28px] w-[330px]" dangerouslySetInnerHTML={{ __html: des }} />
        </div>
    )
}

export default VisionCard
