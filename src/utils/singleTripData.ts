import { DateRange } from "react-day-picker";

export const rangeDateFormatter = (date: DateRange): { from: string; to: string } => {
	const hashedDate = { from: "", to: "" };
	if (date.from) {
		hashedDate.from = date.from.toDateString();
	}
	if (date.to) {
		hashedDate.to = date.to.toDateString();
	}
	return hashedDate;
};

export const singleDateFormatter = (date: Date): string => {
	let hashedDate = "";
	if (date) {
		hashedDate = date.toDateString();
	}
	return hashedDate;
};
