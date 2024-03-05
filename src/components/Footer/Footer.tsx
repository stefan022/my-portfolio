import { FunctionComponent, JSX } from "preact";

import "./Footer.scss";

const Footer: FunctionComponent = (): JSX.Element => {
	return (
		<section className="footer">
			<p className="footer__content">
				&copy; 2024 Sb! All rights reserved.
			</p>
		</section>
	);
};

export default Footer;
