'use client'

interface Props {
    type: "google" | "facebook";
    svg: React.ReactNode;
}

export const OtherAuthButton = ({
    svg: Icon,
    type
}: Props) => {
    return (
        <button title={type} type='button'>
            {Icon}
        </button>
    )
}
