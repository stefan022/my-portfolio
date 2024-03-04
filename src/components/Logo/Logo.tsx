import { FunctionComponent, JSX } from "preact";

import logo from "../../assets/logo.webp";

const Logo: FunctionComponent = (): JSX.Element => {
	return (
		<div data-aos="fade-right" className="relative">
			<img width={75} src={logo} alt="logo.webp" />
		</div>
	);
};

export default Logo;
