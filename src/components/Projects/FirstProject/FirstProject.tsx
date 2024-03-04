import { FunctionComponent, JSX } from "preact";

import { ProjectTitle } from "../../../components";
import { firstProjectInfo } from "../../../constants/projectInfo.constant";

const FIrstProject: FunctionComponent = (): JSX.Element => {
	return (
		<div className="w-1/2 max-md:w-full">
			<ProjectTitle
				title="eCoinWall"
				link="http://309n123.e2.mars-hosting.com/"
			/>

			<ul className="text-gray-300">
				{firstProjectInfo.map((info) => {
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

export default FIrstProject;
