import React from 'react';
import Logo from './Logo';
import Menus from './Menus';
import MenuRight from './MenuRight';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="w-full flex flex-row items-center">
                    <Logo />
                    <Menus />
                    <MenuRight />
                </div>
            </nav>
        </header>
    );
}

export default Header;
