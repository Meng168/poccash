import FlagImage from 'assets/landing-page/home/flag_icon.png'
import Image from 'next/image';
import Link from 'next/link';

const Flat = () => {
    return (
        <Link href="/signin" className='ml-[37px] mr-[35px]'>
            <Image
                alt="logo"
                src={FlagImage}
                className="w-[43px] h-[43px]"
                sizes="100vw"
            />
        </Link>
    )
}


export default Flat;