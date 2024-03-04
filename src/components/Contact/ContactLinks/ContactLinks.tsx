import { FunctionComponent, JSX } from "preact";

import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconMail,
} from "@tabler/icons-preact";

import { github, linkedin } from "../../../constants/contact.constant";

const ContactLinks: FunctionComponent = (): JSX.Element => {
	return (
		<div className="flex gap-2" data-aos="fade-up">
			<a
				href={github}
				target="_blank"
				className="rounded-full p-2 hover:bg-gray-800 transition-all"
			>
				<IconBrandGithub size={30} />
			</a>
			<a
				href={linkedin}
				target="_blank"
				className="rounded-full p-2 hover:bg-blue-900 transition-all"
			>
				<IconBrandLinkedin size={30} />
			</a>
			<a className="tooltip p-2">
				<IconMail size={30} />
			</a>
		</div>
	);
};

export default ContactLinks;
