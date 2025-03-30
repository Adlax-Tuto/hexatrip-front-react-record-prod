import { localCustomFetch } from "@/axios/customFetch";
import { AdvisorsFull, FiltersAdvisors } from "@/components";
import { Advisor } from "@/types/types";
import { LoaderFunction } from "react-router-dom";

export const advisorsLoader: LoaderFunction = async ({ request }): Promise<Advisor[] | null> => {
	try {
		const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		const response = await localCustomFetch.get<Advisor[]>("advisers", { params });
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const AdvisorsPage = () => {
	return (
		<>
			<FiltersAdvisors />
			<AdvisorsFull />
		</>
	);
};

export default AdvisorsPage;
