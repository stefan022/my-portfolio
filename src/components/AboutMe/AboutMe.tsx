import { FunctionComponent, JSX } from "preact";

import { Title } from "..";
import { aboutMe } from "../../constants/aboutMe.constant";

const AboutMe: FunctionComponent = (): JSX.Element => {
	return (
		<section
			id="about"
			className="flex items-center justify-center flex-col relative z-10 gap-5 mb-32 pt-4"
		>
			<Title title="About Me" />

			{aboutMe.map((value, index) => {
				return (
					<p
						className="text-center text-gray-300"
						data-aos="fade-up"
						key={index}
					>
						{value}
					</p>
				);
			})}
		</section>
	);
};

export default AboutMe;
