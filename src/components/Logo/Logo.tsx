import { Context, FunctionComponent, JSX } from "preact";
import { useContext } from "preact/hooks";

import { IMenuContext } from "../../typescript/interfaces/IMenuContext";
import MenuContext from "../../context/MenuContext";

import logo from "../../assets/logo.webp";

import "./Logo.scss";

const Logo: FunctionComponent = (): JSX.Element => {
	const { isActive } = useContext(MenuContext as Context<IMenuContext>);

	return (
		<div
			data-aos="fade-right"
			className={`logo ${isActive && "logo__overlay"}`}
		>
			<img width={75} src={logo} alt="logo.webp" />
		</div>
	);
};

export default Logo;
