import { FunctionComponent, JSX } from "preact";

import { sendEmail } from "../../../utils/helpers/sendEmail";

const Hero: FunctionComponent = (): JSX.Element => {
	const handleSendEmail = () => (window.location.href = sendEmail);

	return (
		<button
			className="bg-black py-3 px-10 rounded-full border border-gray-400 btn"
			data-aos="fade-up"
			onClick={handleSendEmail}
		>
			Contact me
		</button>
	);
};

export default Hero;
