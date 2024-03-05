import { FunctionComponent, JSX } from "preact";

import background from "../../assets/background.webp";

import "./Background.scss";

const Background: FunctionComponent = (): JSX.Element => {
	return (
		<div className="relative z-0">
			<img
				className="absolute -top-24 right-0 bg"
				src={background}
				alt="background.webp"
			/>
		</div>
	);
};

export default Background;
