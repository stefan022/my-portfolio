import AOS from "aos";

import { aosConfig } from "../config/aos.config";

export const aos = () => AOS.init(aosConfig);
