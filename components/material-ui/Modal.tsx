'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useAlertModal from '@/hooks/useAlertModal';
import { useRouter } from 'next/navigation';

export default function Modal() {
    const router = useRouter()

    const [isOpen, onClose] = useAlertModal((state) => [
        state.isOpen,
        state.onClose
    ])
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        localStorage.setItem("poc_policy", 'false');
        onClose()
    }

    const handleSubmit = () => {
        router.push('/signin')
        localStorage.setItem("poc_policy", 'false');
        onClose()
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Welcome to PocCash
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Sign up for a free PocCash account to access our industry-leading affiliate marketplace, 
                    ultra-reliable tracking, and unrivaled direct response expertise.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}