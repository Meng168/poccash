'use client'

import React from "react";
import Footer from "../footer";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

const Navbar = ({
    children
}: Props) => {
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    );
}

export default Navbar;
