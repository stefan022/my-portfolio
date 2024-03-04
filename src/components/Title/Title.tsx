import { FunctionComponent, JSX } from "preact";

interface IProps {
	title: string;
}

const Title: FunctionComponent<IProps> = ({ title }): JSX.Element => {
	return (
		<div className="text-center">
			<h2 className="mb-2" data-aos="fade-right">
				{title}
			</h2>
			<h6 className="uppercase mb-6" data-aos="fade-left">
				<span>Explore Now</span>
			</h6>
		</div>
	);
};

export default Title;
