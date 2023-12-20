import FacebookIcon from "../icons/FacebookIcon"
import InstagramIcon from "../icons/InstagramIcon"
import TwitterIcon from "../icons/TwitterIcon"

const RightFooter = () => {
    return (
        <div className="mt-[89px] ml-[165px]">
            <h4 className="text-color-secondary mb-[16px] text-font-25 font-normal tracking-[-0.205px] ml-[26px]">Socal Links</h4>
            <ul className="flex flex-row justify-start items-center space-x-[41px]">
                <li><a href="https://web.facebook.com/digitalgovernmentcommittee" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a></li>
                <li><a href="https://web.facebook.com/digitalgovernmentcommittee" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a></li>
                <li><a href="https://web.facebook.com/digitalgovernmentcommittee" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a></li>
            </ul>
        </div>
    )
}

export default RightFooter
