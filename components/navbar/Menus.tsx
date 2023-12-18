import MenuList from "./MenuList";
import { menuRoutes } from "./menus-data";

const Menus = () => {
    return (
        <ul className="flex items-center space-x-5">
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
