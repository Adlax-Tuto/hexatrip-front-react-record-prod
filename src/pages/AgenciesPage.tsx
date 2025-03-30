import { apiUrl, localCustomFetch } from "@/axios/customFetch";
import Title from "@/components/Title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Agency } from "@/types/types";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import { LoaderFunction, useLoaderData } from "react-router-dom";

export const agenciesLoader: LoaderFunction = async (): Promise<Agency[] | null> => {
	try {
		const response = await localCustomFetch.get<Agency[]>("agencies");
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const AgenciesPage = () => {
	const agencies = useLoaderData() as Agency[];

	return (
		<section className="my-8">
			<div className="align-center">
				<Title text="agencies page" />
				<div className="my-4 flex flex-col gap-6">
					{agencies.map((agency, index) => (
						<Card key={index} className="grid grid-cols-1 md:grid-cols-2 auto-rows-[330px] rounded-2xl overflow-hidden p-0">
							<CardHeader className="p-0">
								<img
									src={apiUrl + "/images" + "/agencies" + `/${agency._id}` + "/" + agency.photo}
									alt=""
									className="h-full w-full object-cover"
								/>
							</CardHeader>
							<CardContent className="flex flex-col gap-3">
								<p className="text-center text-2xl my-6">{agency.title}</p>
								<div className="flex gap-2">
									<MapPinHouse />
									<p>{agency.address}</p>
								</div>
								<div className="flex gap-2">
									<Phone />
									<p>{agency.phone}</p>
								</div>
								<div className="flex gap-2">
									<Mail />
									<p>{agency.email}</p>
								</div>
								<div className="">
									<p>
										Our agencies are open from 9AM to 6PM (french time) from monday to friday, and
										saturday from 9AM to 12AM.
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
export default AgenciesPage;
