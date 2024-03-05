import { FunctionComponent, JSX } from "preact";

import "./ProjectTitle.scss";

interface IProps {
	title: string;
	link: string;
}

const ProjectTitle: FunctionComponent<IProps> = ({
	title,
	link,
}): JSX.Element => {
	return (
		<h4 className="project__title link" data-aos="fade-up">
			<a
				href={link}
				target="_blank"
				className="project__title-content link"
			>
				{title}
			</a>
		</h4>
	);
};

export default ProjectTitle;
