import { FunctionComponent, JSX } from "preact";
import { ContactLinks, Title } from "../../components";

import "./Contact.scss";

const Contact: FunctionComponent = (): JSX.Element => {
	return (
		<section
			id="contact"
			class="flex items-center justify-center flex-col relative z-10 gap-5 mb-8"
		>
			<Title title="Contact" />
			<ContactLinks />
		</section>
	);
};

export default Contact;
