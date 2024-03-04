import { FunctionComponent, JSX } from "preact";
import { useState, useEffect } from "preact/hooks";

import { aos } from "./utils/aos";
import MenuContext from "./context/MenuContext";

import { Navbar } from "./components";

const App: FunctionComponent = (): JSX.Element => {
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(aos, []);

	return (
		<MenuContext.Provider value={{ isActive, setIsActive }}>
			<Navbar />
		</MenuContext.Provider>
	);
};

export default App;
