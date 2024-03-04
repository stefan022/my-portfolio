import { FunctionComponent, JSX } from "preact";

import { FirstProject, SecondProject, Title } from "../../components";

const Projects: FunctionComponent = (): JSX.Element => {
	return (
		<section class="flex items-center justify-center flex-col relative z-10 gap-5 mb-32">
			<Title title="Projects" />
			<div className="flex gap-16 justify-center max-md:flex-col max-md:justify-start max-md:items-center">
				<FirstProject />
				<SecondProject />
			</div>
		</section>
	);
};

export default Projects;
