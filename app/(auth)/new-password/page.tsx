import NewPassword from "./components/NewPassword"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'New Password',
}

const NewPasswordPage = () => {
    return (
        <NewPassword />
    )
}

export default NewPasswordPage
