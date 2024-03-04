import { FunctionComponent, JSX } from "preact";

const Navigation: FunctionComponent = (): JSX.Element => {
	return (
		<nav className="inline-block max-md:hidden" data-aos="fade-left">
			<ul className="flex items-center gap-4">
				<li className="list-none">
					<a href="#about" className="btn-gradient">
						About Me
					</a>
				</li>
				<li className="list-none">
					<a href="#contact" className="btn-white">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
