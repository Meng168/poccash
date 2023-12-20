import MenuList from "./MenuList";
import useRoutes from "./menus-data";

const Menus = () => {
    const menuRoutes = useRoutes()
    return (
        <ul className="flex align-text-bottom justify-items-center">
            {menuRoutes.map((list) => {
                if (!list.label.includes('Home')) {
                    return (
                        <MenuList
                            key={list.id}
                            list={list}
                        />
                    )
                }
            })}
        </ul>
    );
}

export default Menus;
