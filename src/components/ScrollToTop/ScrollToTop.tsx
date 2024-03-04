import { FunctionComponent, JSX } from "preact";

import { useEffect, useState } from "preact/hooks";
import { IconChevronUp } from "@tabler/icons-preact";

import "./ScrollToTop.scss";

const ScrollToTop: FunctionComponent = (): JSX.Element => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const scrollToTop = () => setIsActive(window.scrollY > 750);
	const handleScroll = () => window.scrollTo(0, 0);

	useEffect(() => {
		window.addEventListener("scroll", scrollToTop);

		return () => {
			window.removeEventListener("scroll", scrollToTop);
		};
	});

	return (
		<div
			class={isActive ? "scroll-btn active" : "scroll-btn"}
			onClick={handleScroll}
		>
			<IconChevronUp />
		</div>
	);
};

export default ScrollToTop;
