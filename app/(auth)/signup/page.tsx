import Register from "./components/Register"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign Up',
}

const SingUpPage = () => {
    return (
        <Register />
    )
}

export default SingUpPage