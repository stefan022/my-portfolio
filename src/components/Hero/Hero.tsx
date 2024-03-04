import { FunctionComponent, JSX } from "preact";

const Hero: FunctionComponent = (): JSX.Element => {
	return (
		<section className="w-full min-h-[800px] flex flex-col items-center justify-center relative z-10 gap-5">
			<div>Avatar</div>
			<div>Info</div>
			<div>Desc</div>
			<div>ContactMe</div>
		</section>
	);
};

export default Hero;
