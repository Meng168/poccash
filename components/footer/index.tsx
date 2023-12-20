import CopyRight from "./CopyRight";
import LeftFooter from "./LeftFooter";
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";

const Footer = () => {
    return (
        <footer className="w-[1728px] h-[500px] pt-1.5">
            <div className="flex flex-row">
                <LeftFooter />
                <MiddleFooter />
                <RightFooter />
            </div>
            <CopyRight />
        </footer>
    );
}

export default Footer;
