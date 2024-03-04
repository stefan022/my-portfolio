import { FunctionComponent, JSX } from "preact";

import background from "../../assets/background.webp";

const Background: FunctionComponent = (): JSX.Element => {
	return (
		<div className="relative z-0">
			<img
				className="absolute -top-24 right-0 w-[1920px]"
				src={background}
				alt="background.webp"
			/>
		</div>
	);
};

export default Background;
