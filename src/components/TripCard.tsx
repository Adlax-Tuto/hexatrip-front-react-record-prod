import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Trip } from "@/types/types";
import { apiUrl } from "@/axios/customFetch";
import { regionsCodes } from "@/utils/filtersData";
import { Badge } from "./ui/badge";
import { formatAsEuros } from "@/utils/formatAsEuros";
import { getCategoryColor } from "@/utils/categoryColorsData";

const TripCard = ({ trip }: { trip: Trip }) => {
	const { _id, title, region, town, category, images, duration, adultPrice, tags } = trip;

	const apiImageUrl = apiUrl + "/images/trips/" + _id + "/" + images[0];

	return (
		<Card className="overflow-hidden rounded-2xl hover-card cursor-pointer shadow-2xl hover:shadow-[0_50px_20px_-11px_rgba(0,0,0,0.3)] p-0">
			<Link to={`/research/${_id}`} className="h-full flex flex-col justify-between ">
				<CardHeader className="w-full h-[65%] p-0 ">
					<img src={apiImageUrl} alt="main-img" className="h-full w-full object-cover" />
				</CardHeader>
				<CardContent className="mt-1 h-[20%] py-0">
					<CardTitle className="text-sky-800">
						{regionsCodes.find((item) => item.code === region)?.name}&nbsp;- &nbsp;{town}
					</CardTitle>
					<CardDescription className="text-4xl text-amber-900 mt-4 font-special tracking-widest leading-7 text-center">
						{title}
					</CardDescription>
				</CardContent>
				<CardFooter className="flex flex-col pt-0 pb-1">
					<div className="flex gap-2">
						{tags.map((tag, index) => (
							<Badge key={index}>{tag}</Badge>
						))}
					</div>
					<div className="place-self-end">
						<span className="font-bold capitalize underline">
							<Badge style={{ backgroundColor: getCategoryColor(category) }}>{category}</Badge>
						</span>
						&nbsp; stay : {duration} day(s) and {duration - 1} night(s)
					</div>
					<p className="mt-0 place-self-end font-bold">Price/pers : {formatAsEuros(adultPrice)}</p>
				</CardFooter>
			</Link>
		</Card>
	);
};
export default TripCard;
