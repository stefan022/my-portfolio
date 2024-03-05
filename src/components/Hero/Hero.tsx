import { FunctionComponent, JSX } from "preact";

import { Avatar, ContactMe, Desc, Info } from "..";

import "./Hero.scss";

const Hero: FunctionComponent = (): JSX.Element => {
	return (
		<section className="hero">
			<Avatar />
			<Info />
			<Desc />
			<ContactMe />
		</section>
	);
};

export default Hero;
