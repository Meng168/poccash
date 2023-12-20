import Logo6 from "../icons/Logo6"

const LeftFooter = () => {
    return (
        <div className="mt-[68px] ml-[187px]">
            <Logo6 />
            <div className="mt-[19px] mb-[33px]">
                <ul className="flex flex-row flex-nowrap pl-[32px] text-color-secondary text-font-15 tracking-[-0.205px]">
                    <li>News</li>
                    <li className="ml-[35px]">Features</li>
                    <li className="ml-[33px]">Term of use </li>
                    <li className="ml-[31px]">Contact us</li>
                </ul>
            </div>
            <div className="text-center ml-[32px] inline-flex align-baseline h-[38px] flex-col justify-center flex-shrink-0 text-color-primary text-font-15 font-normal">PocCash © 2022</div>
        </div>
    )
}

export default LeftFooter
