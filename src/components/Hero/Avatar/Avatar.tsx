import { FunctionComponent, JSX } from "preact";

import avatar from "../../../assets/avatar.webp";

import "./Avatar.scss";

const Avatar: FunctionComponent = (): JSX.Element => {
	return (
		<div data-aos="fade-down" className="avatar">
			<img src={avatar} alt="avatar.webp" className="avatar__img" />
			<p className="avatar__hi">
				<span>Hi !</span>
			</p>
		</div>
	);
};

export default Avatar;
