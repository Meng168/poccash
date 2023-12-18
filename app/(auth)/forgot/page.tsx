import ForgotForm from "./components/ForgotForm"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Forgot',
}

const ForgotPage = () => {
    return (
        <ForgotForm />
    )
}

export default ForgotPage
