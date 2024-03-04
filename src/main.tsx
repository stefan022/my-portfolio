import { render } from "preact";

import App from "./app.tsx";

const app = document.getElementById("app") as HTMLDivElement;

render(<App />, app);
