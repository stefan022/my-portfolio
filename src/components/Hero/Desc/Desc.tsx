import { FunctionComponent, JSX } from "preact";

import "./Desc.scss";

const Desc: FunctionComponent = (): JSX.Element => {
	return (
		<div className="desc" data-aos="fade-up">
			<p>I most enjoy working with React and Vue,</p>
			<p>and my current focus is on learning backend with Node.js 🎧</p>
		</div>
	);
};

export default Desc;
