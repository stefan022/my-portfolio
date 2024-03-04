import { FunctionComponent, JSX } from "preact";

import { ProjectTitle } from "../../../components";
import { secondProjectInfo } from "../../../constants/projectInfo.constant";

const SecondProject: FunctionComponent = (): JSX.Element => {
	return (
		<div className="w-1/2 max-md:w-full">
			<ProjectTitle
				title="ElectroneX"
				link="https://react-ts-psi.vercel.app/"
			/>

			<ul className="text-gray-300">
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
