import { FunctionComponent, JSX } from "preact";

import { Avatar, ContactMe, Desc, Info } from "..";

const Hero: FunctionComponent = (): JSX.Element => {
	return (
		<section className="w-full min-h-[800px] flex flex-col items-center justify-center relative z-10 gap-5">
			<Avatar />
			<Info />
			<Desc />
			<ContactMe />
		</section>
	);
};

export default Hero;
