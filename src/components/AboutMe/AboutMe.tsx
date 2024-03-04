import { FunctionComponent, JSX } from "preact";

import { Title } from "..";

const AboutMe: FunctionComponent = (): JSX.Element => {
	return (
		<section
			id="about"
			class="flex items-center justify-center flex-col relative z-10 gap-5 mb-32 pt-4"
		>
			<Title title="About Me" />
		</section>
	);
};

export default AboutMe;
