import { FunctionComponent, JSX } from "preact";

interface IProps {
	title: string;
	link: string;
}

const ProjectTitle: FunctionComponent<IProps> = ({
	title,
	link,
}): JSX.Element => {
	return (
		<h4 className="mb-6 link w-fit" data-aos="fade-up">
			<a href={link} target="_blank" className="text-3xl transition-">
				{title}
			</a>
		</h4>
	);
};

export default ProjectTitle;
