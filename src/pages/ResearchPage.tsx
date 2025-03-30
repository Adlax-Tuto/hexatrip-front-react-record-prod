import { localCustomFetch } from "@/axios/customFetch";
import { Advisors, BreadCrumbs, Filters, Research } from "@/components";
import { ResearchLoaderType, Trip } from "@/types/types";
import { LoaderFunction } from "react-router-dom";

export const researchLoader: LoaderFunction = async ({ request }): Promise<ResearchLoaderType | null> => {
	try {
		let params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		const response = await localCustomFetch.get<Trip[]>("trips", { params });
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
		return { data: response.data, params: params };
	} catch (error) {
		console.log(error);
		return null;
	}
};

const ResearchPage = () => {
	return (
		<>
			<BreadCrumbs />
			<Filters />
			<Research />
			<Advisors />
		</>
	);
};
export default ResearchPage;
