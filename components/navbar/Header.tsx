import React from 'react';
import Logo from './Logo';
import Menus from './Menus';
import MenuRight from './MenuRight';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="flex flex-row place-items-center items-center bg-red-500">
                    <Logo />
                    <Menus />
                    <MenuRight />
                </div>
            </nav>
        </header>
    );
}

export default Header;
