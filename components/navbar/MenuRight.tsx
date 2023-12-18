import FlagImage from 'assets/landing-page/home/flag_icon.png'
import Image from 'next/image';

const MenuRight = () => {
    return (
        <div>
            <Image
                alt="logo"
                src={FlagImage}
                className="w-auto h-auto"
                sizes="100vw"
            />
        </div>
    )
}


export default MenuRight;