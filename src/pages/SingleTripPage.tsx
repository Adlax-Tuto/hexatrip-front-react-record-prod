import { localCustomFetch } from "@/axios/customFetch";
import { BreadCrumbs, SingleTrip } from "@/components";
import { Trip } from "@/types/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

export const singleTripPageLoader: LoaderFunction = async ({ params }): Promise<Trip | null> => {
	try {
		const response = await localCustomFetch.get<Trip>(`trips/${params.id}`);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const SingleTripPage = () => {
	const { title } = useLoaderData() as Trip;
	return (
		<>
			<BreadCrumbs title={title} />
			<SingleTrip />
		</>
	);
};
export default SingleTripPage;
