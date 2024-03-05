import { FunctionComponent, JSX } from "preact";

import { Title } from "..";
import { aboutMe } from "../../constants/aboutMe.constant";

import "./AboutMe.scss";

const AboutMe: FunctionComponent = (): JSX.Element => {
	return (
		<section id="about" className="about__me">
			<Title title="About Me" />

			{aboutMe.map((value, index) => {
				return (
					<p
						className="about__me-text"
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
