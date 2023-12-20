'use client'

import React from 'react';
import Logo from './Logo';
import Menus from './Menus';
import Flat from './Flat';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter()
    return (
        <header className='w-[1728px] h-[156px]'>
            <nav className="flex flex-row items-center w-full">
                <Logo />
                <Menus />
                <Flat />
                <Button onClick={() => router.push('/signin')} variant="outlined" className="!border-[2.5px] !border-color-primary normal-case font-medium text-font-25 !text-color-primary !rounded-[10px] !w-[196px] !h-[46px]">
                    Login
                </Button>
            </nav>
        </header>
    );
}

export default Header;
