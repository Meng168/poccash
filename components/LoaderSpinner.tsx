'use client'

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoaderSpinner = () => {
    return (
        <div className="flex h-screen relative flex-col justify-center items-center">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    )
}

export default LoaderSpinner
