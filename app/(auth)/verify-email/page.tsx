import VerifyEmail from "./components/VerifyEmail"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Verify Email',
}

const VerifyEmailPage = () => {
    return (
        <VerifyEmail />
    )
}

export default VerifyEmailPage
