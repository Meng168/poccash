'use client'

import React from "react";
import Footer from "../footer";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

const Wrapper = ({
    children
}: Props) => {
    return (
        <>
            <Header />
                <main className="w-[1728px]">{children}</main>
            <Footer />
        </>
    );
}

export default Wrapper;
