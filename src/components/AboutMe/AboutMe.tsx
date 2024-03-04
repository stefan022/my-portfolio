import { FunctionComponent, JSX } from "preact";

const AboutMe: FunctionComponent = (): JSX.Element => {
	return (
		<section
			id="about"
			class="flex items-center justify-center flex-col relative z-10 gap-5 mb-32 pt-4"
		>
			About me
		</section>
	);
};

export default AboutMe;
