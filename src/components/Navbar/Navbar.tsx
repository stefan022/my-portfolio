import { FunctionComponent, JSX } from "preact";

import { Logo, Navigation } from "..";

const Navbar: FunctionComponent = (): JSX.Element => {
	return (
		<section className="w-10/12 mx-auto flex justify-between items-center py-8 relative z-30">
			<Logo />
			<Navigation />
		</section>
	);
};

export default Navbar;
