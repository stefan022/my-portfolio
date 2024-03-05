import { FunctionComponent, JSX, Context } from "preact";

import { useContext } from "preact/hooks";
import MenuContext from "../../../context/MenuContext";
import { IMenuContext } from "../../../typescript/interfaces/IMenuContext";

import "./MenuContent.scss";

const MenuContent: FunctionComponent = (): JSX.Element | null => {
	const { isActive, setIsActive } = useContext(
		MenuContext as Context<IMenuContext>
	);

	const handleCloseMenu = () => setIsActive(false);

	if (!isActive) return null;

	return (
		<section className="menu__content" data-aos="fade-left">
			<h6 className="menu__content-title">
				<span>Menu</span>
			</h6>
			<ul>
				<li className="menu__content-list">
					<a href="#about" onClick={handleCloseMenu}>
						About me
					</a>
				</li>
				<li>
					<a href="#contact" onClick={handleCloseMenu}>
						Contact
					</a>
				</li>
			</ul>
		</section>
	);
};

export default MenuContent;
