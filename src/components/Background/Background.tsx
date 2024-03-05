import { FunctionComponent, JSX } from "preact";

import background from "../../assets/background.webp";

import "./Background.scss";

const Background: FunctionComponent = (): JSX.Element => {
	return (
		<div className="bg">
			<img className="bg__img" src={background} alt="background.webp" />
		</div>
	);
};

export default Background;
