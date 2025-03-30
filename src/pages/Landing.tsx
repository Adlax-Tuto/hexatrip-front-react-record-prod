import { Advisors, BestSellersCarousel, Filters, Gallery, RegionsCarousel, TagsCarousel, WhyUs, WhyUsText } from "@/components";
import { FiltersParams } from "@/types/types";
import { LoaderFunction } from "react-router-dom";

export const landingLoader: LoaderFunction = ({ request }): { params: FiltersParams } => {
	let params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
	if (Object.keys(params).length === 0) {
		params = {
			town: "",
			duration: "0",
			category: "0",
			price: "",
			region: "0",
			tags: "0",
		};
	}
	return { params: params };
};

const Landing = () => {
	return (
		<>
			<Filters />
			<RegionsCarousel />
			<BestSellersCarousel />
			<TagsCarousel />
			<WhyUsText />
			<WhyUs />
			<Gallery />
			<Advisors />
		</>
	);
};
export default Landing;
