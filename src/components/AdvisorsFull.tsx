import { Advisor } from "@/types/types";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { apiUrl } from "@/axios/customFetch";
import { Badge } from "./ui/badge";

const AdvisorsFull = () => {
	const advisors = useLoaderData() as Advisor[];

	if (advisors.length === 0) {
		return (
			<section className="align-center py-8 min-h-[100vh]">
				<div>
					<p>No member associated to this destination</p>
				</div>
			</section>
		);
	}

	return (
		<section className="align-center py-8 min-h-[100vh]">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
				{advisors.map((advisor, index) => (
					<Card key={index} className="flex flex-col items-center p-2 pb-6">
						<CardHeader className="h-[250px] w-[250px] cursor-pointer transition-all mix-blend-luminosity hover:scale-105 hover:mix-blend-normal p-6">
							<Link to={`${advisor._id}`} className="h-full w-full">
								<img
									src={apiUrl + "/images" + "/advisers" + `/${advisor._id}` + `/${advisor.image}`}
									alt={advisor.name}
									className="h-full w-full object-cover rounded-full"
								/>
							</Link>
						</CardHeader>
						<CardContent className="text-center">
							<p className="capitalize font-bold">{advisor.name}</p>
						</CardContent>
						<CardFooter className="flex flex-wrap gap-2">
							{advisor.tags.map((tag, index) => (
								<Badge key={index}>{tag}</Badge>
							))}
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
export default AdvisorsFull;
