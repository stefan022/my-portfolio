import { FunctionComponent, JSX } from "preact";

import { sendEmail } from "../../../utils/helpers/sendEmail";

const Hero: FunctionComponent = (): JSX.Element => {
	const handleSendEmail = () => (window.location.href = sendEmail);

	return (
		<div data-aos="fade-up">
			<button
				id="btn-gradient"
				className="bg-black py-3 px-10 rounded-full border border-gray-400 btn-gradient"
				onClick={handleSendEmail}
			>
				Contact Me
			</button>
		</div>
	);
};

export default Hero;
