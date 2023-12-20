import { usePathname } from "next/navigation"
import { useMemo } from "react"

const useRoutes = () => {
    const pathname = usePathname()
    return useMemo(() =>
        [
            {
                id: "0",
                label: "Home",
                link: "/",
                active: pathname === '/',
            },
            {
                id: "1",
                label: "Benefits",
                link: "/benefits",
                active: pathname === '/benefits',
            },
            {
                id: "2",
                label: "Features",
                link: "/features",
                active: pathname === '/features',
            },
            {
                id: "3",
                label: "About us",
                link: "/about-us",
                active: pathname === '/about-us',
            }
        ]
    , [pathname])
}

export default useRoutes