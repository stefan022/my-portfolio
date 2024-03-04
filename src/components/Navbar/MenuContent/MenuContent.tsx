import { FunctionComponent, JSX, Context } from "preact";

import { useContext } from "preact/hooks";
import MenuContext from "../../../context/MenuContext";
import { IMenuContext } from "../../../typescript/interfaces/IMenuContext";

const MenuContent: FunctionComponent = (): JSX.Element | null => {
	const { isActive, setIsActive } = useContext(
		MenuContext as Context<IMenuContext>
	);

	const handleCloseMenu = () => setIsActive(false);

	if (!isActive) return null;

	return (
		<section
			className="absolute z-50 right-0 top-24 bg-black p-4 flex flex-col items-center justify-center gap-6 w-[200px] h-[150px] rounded-3xl border border-gray-300"
			data-aos="fade-left"
		>
			<h6 className="pt-4">
				<span>Menu</span>
			</h6>
			<ul>
				<li className="mb-2">
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
