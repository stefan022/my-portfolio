import { FunctionComponent, JSX } from "preact";
import { Title } from "../../components";

const Contact: FunctionComponent = (): JSX.Element => {
	return (
		<section
			id="contact"
			class="flex items-center justify-center flex-col relative z-10 gap-5 mb-8"
		>
			<Title title="Contact" />
			<div>Links</div>
		</section>
	);
};

export default Contact;
