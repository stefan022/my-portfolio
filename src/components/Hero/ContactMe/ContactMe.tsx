import { FunctionComponent, JSX } from "preact";

import { sendEmail } from "../../../utils/helpers/sendEmail";

const Hero: FunctionComponent = (): JSX.Element => {
	const handleSendEmail = () => (window.location.href = sendEmail);

	return (
		<div data-aos="fade-up">
			<button
				id="btn-gradient"
				className="btn-gradient"
				onClick={handleSendEmail}
			>
				Contact Me
			</button>
		</div>
	);
};

export default Hero;
