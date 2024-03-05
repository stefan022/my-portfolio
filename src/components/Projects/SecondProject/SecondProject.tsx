import { FunctionComponent, JSX } from "preact";

import { ProjectTitle } from "../../../components";
import { secondProjectInfo } from "../../../constants/projectInfo.constant";

const SecondProject: FunctionComponent = (): JSX.Element => {
	return (
		<div className="projects__group-project">
			<ProjectTitle
				title="ElectroneX"
				link="https://react-ts-psi.vercel.app/"
			/>

			<ul className="projects__group-project__desc">
				{secondProjectInfo.map((info) => {
					const { id, text } = info;

					return (
						<li key={id} data-aos="fade-up">
							{text}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SecondProject;
