import { render } from "preact";

import App from "./app.tsx";

import "aos/dist/aos.css";
import "./scss/main.scss";

const app = document.getElementById("app") as HTMLDivElement;

render(<App />, app);
