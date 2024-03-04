import { FunctionComponent, JSX, Fragment, Context } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { IMenuContext } from "../../../typescript/interfaces/IMenuContext";
import { IconBurger, IconCircleDashed } from "@tabler/icons-preact";

import MenuContext from "../../../context/MenuContext";

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
				className="hidden cursor-pointer hover:text-gray-300 transition-all max-md:inline-block"
				onClick={handleOpenMenu}
			/>
		);
	}

	return (
		<IconBurger
			size={30}
			className="hidden cursor-pointer hover:text-gray-300 transition-all max-md:inline-block"
			data-aos={init && "fade-left"}
			onClick={handleOpenMenu}
		/>
	);
};

export default MenuIcon;
