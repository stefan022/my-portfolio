import { FunctionComponent, JSX } from "preact";

import { FirstProject, SecondProject, Title } from "../../components";

import "./Projects.scss";

const Projects: FunctionComponent = (): JSX.Element => {
	return (
		<section className="projects">
			<Title title="Projects" />
			<div className="projects__group">
				<FirstProject />
				<SecondProject />
			</div>
		</section>
	);
};

export default Projects;
