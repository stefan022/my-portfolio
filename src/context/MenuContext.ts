import { createContext } from "preact";

import { IMenuContext } from "../typescript/interfaces/IMenuContext";

const MenuContext = createContext<IMenuContext>({
	isActive: false,
	setIsActive: () => {},
});

export default MenuContext;
