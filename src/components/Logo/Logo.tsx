import { Context, FunctionComponent, JSX } from "preact";
import { useContext } from "preact/hooks";

import { IMenuContext } from "../../typescript/interfaces/IMenuContext";
import MenuContext from "../../context/MenuContext";

import logo from "../../assets/logo.webp";

const Logo: FunctionComponent = (): JSX.Element => {
	const { isActive } = useContext(MenuContext as Context<IMenuContext>);

	return (
		<div
			data-aos="fade-right"
			className={`relative ${
				isActive &&
				"relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:bg-opacity-70"
			}`}
		>
			<img width={75} src={logo} alt="logo.webp" />
		</div>
	);
};

export default Logo;
