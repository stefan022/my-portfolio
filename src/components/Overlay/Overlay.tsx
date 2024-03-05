import { Context, FunctionComponent, JSX } from "preact";
import { useContext } from "preact/hooks";

import { IMenuContext } from "../../typescript/interfaces/IMenuContext";
import MenuContext from "../../context/MenuContext";

import "./Overlay.scss";

const Overlay: FunctionComponent = (): JSX.Element | null => {
	const { isActive } = useContext(MenuContext as Context<IMenuContext>);

	if (!isActive) return null;

	return <div className="overlay"></div>;
};

export default Overlay;
