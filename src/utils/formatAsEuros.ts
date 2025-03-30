export const formatAsEuros = (price: string | number): string => {
	const eurosAmount = Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(Number(price) / 100);
	return eurosAmount;
};

export const hotelTax: number = 1000;
