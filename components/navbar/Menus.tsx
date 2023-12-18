import MenuList from "./MenuList";
import { menuRoutes } from "./menus-data";

const Menus = () => {
    return (
        <ul className="flex align-text-bottom justify-items-center space-x-5 bg-blue-500 h-[82px]">
            {menuRoutes.map((list) => (
                <MenuList 
                    key={list.id}
                    list={list}
                />
            ))}
        </ul>
    );
}

export default Menus;
