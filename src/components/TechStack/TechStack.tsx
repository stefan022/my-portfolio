import { FunctionComponent, JSX } from "preact";

import { useEffect, useState } from "preact/hooks";
import { checkScreenWidth } from "../../utils/helpers/checkScreenWidth";
import { Title } from "../../components";
import { skillIcons } from "../../constants/skillIcons.constant";

import "./TechStack.scss";

const TechStack: FunctionComponent = (): JSX.Element => {
	const [perLine, setPerLine] = useState<number>(13);

	const calcPerLine = () => {
		const screenWidth = window.innerWidth;

		const pL = checkScreenWidth(screenWidth);

		setPerLine(pL);
	};

	useEffect(() => {
		calcPerLine();

		window.addEventListener("resize", calcPerLine);

		return () => {
			window.removeEventListener("resize", calcPerLine);
		};
	}, []);

	return (
		<section className="tech__stack">
			<Title title="Tech Stack" />
			<div className="tech__stack-skills" data-aos="fade-up">
				<div className="tech__stack-skills-img">
					<img src={`${skillIcons}${perLine}`} alt="My Skills" />
				</div>
			</div>
		</section>
	);
};

export default TechStack;
