import { FunctionComponent, JSX } from "preact";

const Navigation: FunctionComponent = (): JSX.Element => {
	return (
		<nav className="inline-block max-md:hidden" data-aos="fade-left">
			<ul className="flex items-center gap-4">
				<li className="list-none">
					<a
						href="#about"
						className="px-5 py-2 border border-white rounded-full btn"
						data-aos="fade-left"
					>
						About me
					</a>
				</li>
				<li className="list-none">
					<a
						href="#contact"
						className="px-5 py-2 border bg-white text-black rounded-full hover:bg-black hover:border hover:text-white transition-all hover:transition-all"
						data-aos="fade-left"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
