import { FunctionComponent, JSX } from "preact";
import { useEffect } from "preact/hooks";

import { aos } from "./utils/aos";

const App: FunctionComponent = (): JSX.Element => {
	useEffect(aos, []);

	return <div>App</div>;
};

export default App;
