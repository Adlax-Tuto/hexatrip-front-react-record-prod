const getCategoryColor = (category: string): string => {
	switch (category) {
		case "short":
			return "#f59e0b";
		case "long":
			return "#10b981";
		case "tour":
			return "#8b5cf6";
		case "cruise":
			return "#d946ef";
		default:
			return "";
	}
};

export { getCategoryColor };
