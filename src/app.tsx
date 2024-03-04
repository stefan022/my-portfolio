import { Fragment, FunctionComponent, JSX } from "preact";
import { useState, useEffect } from "preact/hooks";

import { AboutMe, Background, Hero, Navbar, Overlay } from "./components";
import { aos } from "./utils/aos";

import MenuContext from "./context/MenuContext";
import Container from "./container/Container";

const App: FunctionComponent = (): JSX.Element => {
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(aos, []);

	return (
		<MenuContext.Provider value={{ isActive, setIsActive }}>
			<Navbar />
			<Background />
			<Overlay />
			<Container>
				<Fragment>
					<Hero />
					<AboutMe />
				</Fragment>
			</Container>
		</MenuContext.Provider>
	);
};

export default App;
