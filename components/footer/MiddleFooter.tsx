import LocationIcon from "../icons/LocationIcon"
import MailIcon from "../icons/MailIcon"
import PhoneIcon from "../icons/PhoneIcon"

const MiddleFooter = () => {
    return (
        <ul className="flex flex-col justify-center ml-[166.5px]">
            <li className="text-color-secondary text-font-20 font-normal tracking-[-0.205px] flex flex-row space-x-[27px] mb-[49px]"><LocationIcon /> <span className="mt-[95px]">#12, St 323, Boeung Kak II, Toul Kork, <br />Phnom Penh, Cambodia</span></li>
            <li className="text-color-secondary text-font-20 font-normal tracking-[-0.205px] flex flex-row space-x-[27px] mb-[53px]"><PhoneIcon /> <span>+855 12 999 999</span></li>
            <li className="text-color-secondary text-font-20 font-normal tracking-[-0.205px] flex flex-row space-x-[27px]"><MailIcon /> <span>PocCash@gmail.com</span></li>
        </ul>
    )
}

export default MiddleFooter
