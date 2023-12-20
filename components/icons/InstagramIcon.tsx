const InstagramIcon = ({
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
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M21 27.563a6.562 6.562 0 100-13.125 6.562 6.562 0 000 13.125z"
            ></path>
            <path
                stroke="#6DB33F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M28.219 5.906H13.78a7.875 7.875 0 00-7.875 7.875v14.437a7.875 7.875 0 007.875 7.875H28.22a7.875 7.875 0 007.875-7.875V13.781a7.875 7.875 0 00-7.875-7.875z"
            ></path>
            <path
                fill="#6DB33F"
                d="M29.531 14.438a1.969 1.969 0 100-3.938 1.969 1.969 0 000 3.938z"
            ></path>
        </svg>
    )
}

export default InstagramIcon
