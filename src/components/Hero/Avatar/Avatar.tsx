import { FunctionComponent, JSX } from "preact";

import avatar from "../../../assets/avatar.webp";

const Avatar: FunctionComponent = (): JSX.Element => {
	return (
		<div data-aos="fade-down">
			<img
				src={avatar}
				alt="avatar.webp"
				className="rounded-full border-2 border-white w-[200px] avatar max-sm:w-[150px]"
			/>
		</div>
	);
};

export default Avatar;
