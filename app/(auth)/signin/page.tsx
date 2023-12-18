import Login from "./components/Login"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign In',
}

const SinginPage = () => {
    return (
        <Login />
    )
}

export default SinginPage
