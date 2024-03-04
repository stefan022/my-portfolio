import { FunctionComponent, JSX } from "preact";

const Info: FunctionComponent = (): JSX.Element => {
	return (
		<div className="text-center mb-6 px-2">
			<h1 className="mb-2 full-name" data-aos="fade-right">
				Stefan Blagojevic!
			</h1>
			<h4 data-aos="fade-left">
				<span>Frontend Developer</span> 💻
			</h4>
		</div>
	);
};

export default Info;
