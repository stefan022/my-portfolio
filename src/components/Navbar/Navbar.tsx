import { FunctionComponent, JSX } from "preact";

import { Logo, MenuContent, MenuIcon, Navigation } from "..";

import "./Navbar.scss";

const Navbar: FunctionComponent = (): JSX.Element => {
	return (
		<section className="navbar">
			<Logo />
			<Navigation />
			<MenuIcon />
			<MenuContent />
		</section>
	);
};

export default Navbar;
