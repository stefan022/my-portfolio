import { FunctionComponent, JSX } from "preact";

import "./Title.scss";

interface IProps {
	title: string;
}

const Title: FunctionComponent<IProps> = ({ title }): JSX.Element => {
	return (
		<div className="title">
			<h2 className="title__content" data-aos="fade-right">
				{title}
			</h2>
			<h6 className="title__subtitle" data-aos="fade-left">
				<span>Explore Now</span>
			</h6>
		</div>
	);
};

export default Title;
