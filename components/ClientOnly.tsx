'use client'

import React, { useEffect, useState } from "react"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";
import Modal from "./material-ui/Modal";

interface Props {
    children: React.ReactNode;
}

const ClientOnly = ({
    children
}: Props) => {
    const [hasMounted, setHasMounted] = useState(false)
    const policy = typeof window !== 'undefined' ? localStorage.getItem("poc_policy") : undefined

    useEffect(() => {
        setHasMounted(true)
    }, [])

    useEffect(() => {
        // Get the value from local storage if it exists
        const val = typeof window !== 'undefined' ? localStorage.getItem("poc_policy") : undefined
        if(!val) localStorage.setItem("poc_policy", 'true')
    }, [])

    if (!hasMounted) return null

    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                {policy === "true" && (
                    <Modal />
                )}
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}

export default ClientOnly