import { PerLine } from "../../typescript/types/PerLine";

export const checkScreenWidth = (screenWidth: number): PerLine => {
	if (screenWidth >= 768) {
		return 13;
	}

	if (screenWidth >= 400) {
		return 5;
	}

	return 3;
};
