import { FunctionComponent, JSX } from "preact";

const Footer: FunctionComponent = (): JSX.Element => {
	return (
		<section class="flex items-center justify-center relative z-10 pt-6 pb-8">
			<p className="text-gray-300">
				&copy; 2024 Sb! All rights reserved.
			</p>
		</section>
	);
};

export default Footer;
