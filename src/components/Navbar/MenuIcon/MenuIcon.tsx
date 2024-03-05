import { FunctionComponent, JSX, Context } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { IMenuContext } from "../../../typescript/interfaces/IMenuContext";
import { IconBurger, IconCircleDashed } from "@tabler/icons-preact";

import MenuContext from "../../../context/MenuContext";

import "./MenuIcon.scss";

const MenuIcon: FunctionComponent = (): JSX.Element => {
	const { isActive, setIsActive } = useContext(
		MenuContext as Context<IMenuContext>
	);

	const [init, setInit] = useState<boolean>(true);

	const handleOpenMenu = () => {
		setIsActive(!isActive);
		setInit(false);
	};

	const checkScreenWidth = () => {
		const screenWidth = window.innerWidth;

		if (screenWidth >= 768) setIsActive(false);
	};

	useEffect(() => {
		window.addEventListener("resize", checkScreenWidth);

		return () => {
			window.removeEventListener("resize", checkScreenWidth);
		};
	}, []);

	if (isActive) {
		return (
			<IconCircleDashed
				size={30}
				className="menu__icon"
				onClick={handleOpenMenu}
			/>
		);
	}

	return (
		<IconBurger
			size={30}
			className="menu__icon"
			data-aos={init && "fade-left"}
			onClick={handleOpenMenu}
		/>
	);
};

export default MenuIcon;
