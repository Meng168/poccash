const FacebookIcon = ({
    className
}: {
    className?: string
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="none"
            viewBox="0 0 42 42"
            className={className}
        >
            <path
                stroke="#6DB33F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 36.75c8.698 0 15.75-7.051 15.75-15.75 0-8.698-7.052-15.75-15.75-15.75S5.25 12.302 5.25 21c0 8.699 7.052 15.75 15.75 15.75z"
            ></path>
            <path
                stroke="#6DB33F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M27.563 14.438h-2.625A3.922 3.922 0 0021 18.375V36.75M15.75 23.625h10.5"
            ></path>
        </svg>
    )
}

export default FacebookIcon
