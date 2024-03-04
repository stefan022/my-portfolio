import { FunctionComponent, JSX } from "preact";

import { github, linkedin } from "../../../constants/contact.constant";
import { useEffect, useState } from "preact/hooks";

import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconMail,
	IconMailOpened,
} from "@tabler/icons-preact";

const ContactLinks: FunctionComponent = (): JSX.Element => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleClick = () => setIsActive((ia) => !ia);

	useEffect(() => {
		let timeout = setTimeout(() => {
			setIsActive(false);
		}, 10000);

		window.addEventListener("resize", () => setIsActive(false));

		return () => {
			clearTimeout(timeout);
			window.removeEventListener("resize", () => setIsActive(false));
		};
	}, [isActive === true]);

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
			<a
				className={`door p-2 cursor-pointer ${isActive && "active"}`}
				onClick={handleClick}
			>
				{isActive ? (
					<IconMailOpened size={30} />
				) : (
					<IconMail size={30} />
				)}
			</a>
		</div>
	);
};

export default ContactLinks;
