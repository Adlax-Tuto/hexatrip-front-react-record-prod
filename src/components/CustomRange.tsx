import { formatAsEuros } from "@/utils/formatAsEuros";
import { useState } from "react";
import { Slider } from "./ui/slider";

type CustomRangeProps = {
	// label?: string;
	name: string;
	defaultValue?: string;
};

const CustomRange = ({ name, defaultValue }: CustomRangeProps) => {
	const maxPrice = 30000;
	const step = 1000;
	const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
	const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

	return (
		<div className="w-[200px] flex flex-col gap-3">
			<p className="text-center text-md">Max price/pers : {formatAsEuros(selectedPrice)}</p>
			<Slider
				id={name}
				name={name}
				step={step}
				max={maxPrice}
				value={[selectedPrice]}
				onValueChange={(value) => setSelectedPrice(value[0])}
			/>
		</div>
	);
};
export default CustomRange;
