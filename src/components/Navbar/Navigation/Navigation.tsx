import { FunctionComponent, JSX } from "preact";

import "./Navigation.scss";

const Navigation: FunctionComponent = (): JSX.Element => {
	return (
		<nav className="nav" data-aos="fade-left">
			<ul className="nav__group">
				<li className="nav__group-list">
					<a href="#about" className="btn-gradient">
						About Me
					</a>
				</li>
				<li className="nav__group-list">
					<a href="#contact" className="btn-white">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
