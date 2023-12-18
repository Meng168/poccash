import React from 'react';
import LogoImage from 'assets/auth/logo.png'
import Image from 'next/image';
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <Image
                alt="logo"
                src={LogoImage}
                className="w-[206px] h-[82px] object-contain"
                sizes="100vw"
            />
        </Link>
    );
}

export default Logo;
