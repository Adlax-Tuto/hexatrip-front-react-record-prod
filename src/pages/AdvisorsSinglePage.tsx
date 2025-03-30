import { apiUrl, localCustomFetch } from "@/axios/customFetch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Advisor } from "@/types/types";
import { contact } from "@/utils/advisorsSingleData";
import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";

export const advisorsSingleLoader: LoaderFunction = async ({ params }): Promise<Advisor | null> => {
	try {
		const response = await localCustomFetch.get<Advisor>(`advisers/${params.id}`);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const AdvisorsSinglePage = () => {
	const advisor = useLoaderData() as Advisor;
	const navigate = useNavigate();

	return (
		<section className="">
			<div className="h-[30vh]">
				<img src={contact} alt="contact" className="h-full w-full object-cover" />
			</div>
			<div className="align-center my-12">
				<div className="my-6">
					<Button onClick={() => navigate(-1)}>Back</Button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
					<div className="h-[300px] w-[300px] justify-self-center">
						<img
							src={apiUrl + "/images" + "/advisers" + `/${advisor._id}` + `/${advisor.image}`}
							alt="advisor-photo"
							className="h-full w-full object-cover rounded-full"
						/>
					</div>
					<div className="">
						<p className="capitalize text-4xl">{advisor.name}</p>
						<p className="capitalize ">Agency of : {advisor.present}</p>
						<p className=" ">Member for : {advisor.from} year(s)</p>
						<p className="mt-8 ">{advisor.desc} </p>
						<p className="mt-8 ">Contact : </p>
						<p>{advisor.phone} </p>
						<p>{advisor.email} </p>
						<div className="mt-8 flex gap-2">
							{advisor.tags.map((tag, index) => (
								<Badge key={index}>{tag}</Badge>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default AdvisorsSinglePage;
