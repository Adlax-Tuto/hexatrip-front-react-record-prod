import { apiUrl, localCustomFetch } from "@/axios/customFetch";
import { Advisor } from "@/types/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Advisors = () => {
	const [entities, setEntities] = useState<Advisor[]>([]);

	const fetchEntities = async (): Promise<void> => {
		try {
			const response = await localCustomFetch.get<Advisor[]>("advisers");
			setEntities(response.data.slice(0, 4));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchEntities();
	}, []);

	return (
		<section className="py-8 border-t-2 border-b-2 advisors">
			<div className="align-center flex flex-col items-center">
				<p className="text-3xl font-thin my-2">Meet Our Dedicated Advisors</p>
				<p className="text-2xl font-bold">For each place of France</p>
				<p className="text-sm">200 passionate experts ready to help you fully experience this beautiful country</p>
				<div className="my-8 flex flex-wrap gap-6 justify-evenly items-center">
					{entities.map((advisor, index) => (
						<Link to={`/advisors`} key={index}>
							<div className="transition-all cursor-pointer hover:scale-105 mix-blend-luminosity hover:mix-blend-normal">
								<div className="h-[220px] w-[220px]">
									<img
										src={apiUrl + "/images" + "/advisers" + `/${advisor._id}` + `/${advisor.image}`}
										alt=""
										className="h-full w-full object-cover rounded-full"
									/>
								</div>
								<div className="text-center">
									<p className="capitalize">{advisor.name}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div>
					<Link to={`/advisors`}>
						<Button className="transition-all rounded-full hover:bg-amber-600 hover:scale-105 cursor-pointer">
							Look for a specialist
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Advisors;
