import { FunctionComponent, JSX } from "preact";

const Navbar: FunctionComponent = (): JSX.Element => {
	return (
		<section className="w-10/12 mx-auto flex justify-between items-center py-8 relative z-30">
			<div>Logo</div>
			<div>Navigtion</div>
		</section>
	);
};

export default Navbar;
