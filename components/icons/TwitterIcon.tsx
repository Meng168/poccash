const TwitterIcon = ({
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
                d="M21.001 14.438c0-3.61 3.035-6.612 6.645-6.562a6.563 6.563 0 015.939 3.937h5.791l-5.299 5.3a20.984 20.984 0 01-20.95 19.638c-5.25 0-6.563-1.97-6.563-1.97s5.25-1.968 7.875-5.905c0 0-10.5-5.25-7.875-19.688 0 0 6.562 6.563 14.437 7.875v-2.625z"
            ></path>
        </svg>
    )
}

export default TwitterIcon
