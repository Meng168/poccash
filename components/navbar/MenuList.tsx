import Link from "next/link";

interface Props {
    list: Menus
}

const MenuList = ({
    list
}: Props) => {
    return (
        <li>
            <Link href={list.label} className="text-color-secondary">{list.label}</Link>
        </li>
    );
}

export default MenuList;
