import { Context, FunctionComponent, JSX } from "preact";
import { useContext } from "preact/hooks";

import { IMenuContext } from "../../typescript/interfaces/IMenuContext";
import MenuContext from "../../context/MenuContext";

const Overlay: FunctionComponent = (): JSX.Element | null => {
	const { isActive } = useContext(MenuContext as Context<IMenuContext>);

	if (!isActive) return null;

	return (
		<div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-20"></div>
	);
};

export default Overlay;
