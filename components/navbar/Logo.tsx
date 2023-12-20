import React from 'react';
import Link from "next/link";
import Logo6 from '../icons/Logo6';

const Logo = () => {
    return (
        <Link href="/" className='pr-[460px] pl-[167px]'>
            <Logo6 />
        </Link>
    );
}

export default Logo;
