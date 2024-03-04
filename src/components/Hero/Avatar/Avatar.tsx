import { FunctionComponent, JSX } from "preact";

import avatar from "../../../assets/avatar.webp";

const Avatar: FunctionComponent = (): JSX.Element => {
	return (
		<div
			data-aos="fade-down"
			className="relative rounded-full border-2 border-white w-[200px] max-sm:w-[150px] avatar"
		>
			<img
				src={avatar}
				alt="avatar.webp"
				className="rounded-full relative z-10 avatar-img"
			/>
			<p className="absolute top-10 left-10 font-bold">
				<span>Hi !</span>
			</p>
		</div>
	);
};

export default Avatar;
