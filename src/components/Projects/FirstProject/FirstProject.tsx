import { FunctionComponent, JSX } from "preact";

import { ProjectTitle } from "../../../components";
import { firstProjectInfo } from "../../../constants/projectInfo.constant";

const FIrstProject: FunctionComponent = (): JSX.Element => {
	return (
		<div className="projects__group-project">
			<ProjectTitle
				title="eCoinWall"
				link="http://309n123.e2.mars-hosting.com/"
			/>

			<ul className="projects__group-project__desc">
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
