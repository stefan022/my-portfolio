import { FunctionComponent, JSX } from "preact";

import { useEffect, useState } from "preact/hooks";
import { checkScreenWidth } from "../../utils/helpers/checkScreenWidth";
import { Title } from "../../components";
import { skillIcons } from "../../constants/skillIcons.constant";

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
		<section class="flex items-center justify-center flex-col relative z-10 gap-5 mb-32">
			<Title title="Tech Stack" />
			<div
				className="flex gap-5 flex-wrap items-center justify-center"
				data-aos="fade-up"
			>
				<div>
					<img src={`${skillIcons}${perLine}`} alt="My Skills" />
				</div>
			</div>
		</section>
	);
};

export default TechStack;
