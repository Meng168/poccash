import Link from "next/link";

interface Props {
    list: Menus
}

const MenuList = ({
    list
}: Props) => {
    return (
        <li className="w-[127px] text-center">
            <Link href={list.link} className={`text-font-20 hover:text-color-primary transition-all ease-in-out duration-300 font-medium ${list.active ? "text-color-primary" : "text-color-dark"}`}>{list.label}</Link>
        </li>
    );
}

export default MenuList;
