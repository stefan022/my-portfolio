import { FunctionComponent, JSX } from "preact";
import { ContactLinks, Title } from "../../components";

import "./Contact.scss";

const Contact: FunctionComponent = (): JSX.Element => {
	return (
		<section id="contact" className="contact__info">
			<Title title="Contact" />
			<ContactLinks />
		</section>
	);
};

export default Contact;
