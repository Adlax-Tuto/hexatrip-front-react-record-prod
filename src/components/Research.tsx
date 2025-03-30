import { ResearchLoaderType } from "@/types/types";
import { useLoaderData } from "react-router-dom";
import TripCard from "./TripCard";

const Research = () => {
	const { data } = useLoaderData() as ResearchLoaderType;

	if (!data || data.length === 0) {
		return (
			<section className="bg-white py-8 min-h-[50vh]">
				<div className="align-center">
					<p className="text-2xl">No results</p>
				</div>
			</section>
		);
	}

	return (
		<section className="bg-white py-8 min-h-[50vh]">
			<div className="align-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-[650px]">
				{data?.map((trip, index) => (
					<TripCard key={index} trip={trip} />
				))}
			</div>
		</section>
	);
};
export default Research;
