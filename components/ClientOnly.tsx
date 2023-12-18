'use client'

import React, { useEffect, useState } from "react"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";

interface Props {
    children: React.ReactNode;
}

const ClientOnly = ({
    children
}: Props) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}

export default ClientOnly