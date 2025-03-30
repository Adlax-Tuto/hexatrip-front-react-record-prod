import { StringMapCodes } from "@/types/types";

const regionsCodes: StringMapCodes = [
	{ name: "All", code: 0 },
	{ name: "Auvergne-Rhône-Alpes", code: 1 },
	{ name: "Bourgogne-Franche-Comté", code: 2 },
	{ name: "Bretagne", code: 3 },
	{ name: "Centre-Val de Loire", code: 4 },
	{ name: "Corse", code: 5 },
	{ name: "Grand Est", code: 6 },
	{ name: "Hauts-de-France", code: 7 },
	{ name: "Île-de-France", code: 8 },
	{ name: "Normandie", code: 9 },
	{ name: "Nouvelle-Aquitaine", code: 10 },
	{ name: "Occitanie", code: 11 },
	{ name: "Pays de la Loire", code: 12 },
	{ name: "Provence-Alpes-Côte d'Azur", code: 13 },
];

const categories: StringMapCodes = [
	{ name: "All", code: 0 },
	{ name: "Short", code: 1 },
	{ name: "Long", code: 2 },
	{ name: "Cruise", code: 3 },
	{ name: "Tour", code: 4 },
	{ name: "Deal", code: 5 },
];

const durations: StringMapCodes = [
	{ name: "All", code: 0 },
	{ name: "2 days / 1 night", code: 2 },
	{ name: "3 days / 2 night", code: 3 },
	{ name: "4 days / 3 night", code: 4 },
	{ name: "5 days / 4 night", code: 5 },
	{ name: "6 days / 5 night", code: 6 },
	{ name: "7 days / 5 night", code: 7 },
	{ name: "8 days / 5 night", code: 8 },
	{ name: "9 days / 5 night", code: 9 },
];

const tags: StringMapCodes = [
	{ name: "All", code: 0 },
	{ name: "Kids", code: 1 },
	{ name: "Couples", code: 2 },
	{ name: "Families", code: 3 },
	{ name: "Deal", code: 4 },
	{ name: "Mountains", code: 5 },
	{ name: "Beach", code: 6 },
	{ name: "Bestseller", code: 7 },
];

export { regionsCodes, categories, durations, tags };
