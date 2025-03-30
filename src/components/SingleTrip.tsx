import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { StringMapCodes, Trip } from "@/types/types";
import { regionsCodes } from "@/utils/filtersData";
import { Badge } from "./ui/badge";
import { getCategoryColor } from "@/utils/categoryColorsData";
import { apiUrl } from "@/axios/customFetch";
import { useEffect, useState } from "react";
import { formatAsEuros } from "@/utils/formatAsEuros";
import { Calendar } from "./ui/calendar";
import { DateRange } from "react-day-picker";
import { rangeDateFormatter } from "@/utils/singleTripData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useAppDispatch } from "@/hooks";
import { cleanCheckout, setCheckout } from "@/features/checkout/checkoutSlice";

const SingleTrip = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const trip = useLoaderData() as Trip;
	const [photoIndex, setPhotoIndex] = useState(0);
	const [adults, setAdults] = useState(2);
	const [kids, setKids] = useState(0);
	const initCalendarValue: DateRange = { from: undefined, to: undefined };
	const [date, setDate] = useState<DateRange | undefined>(initCalendarValue);
	const { tags, title, summary, region, town, desc, category, images, duration, adultPrice, youngPrice, _id } = trip;

	useEffect(() => {
		dispatch(cleanCheckout());
	}, []);

	const handleGoToCheckout = () => {
		const payload = { trip: _id, from: date?.from?.toString(), to: date?.to?.toString(), adults, kids };
		dispatch(setCheckout(payload));
	};

	return (
		<section className="">
			<div className="align-center my-6">
				<Button onClick={() => navigate(-1)}>Back</Button>
			</div>
			<div className="align-center grid lg:grid-cols-4 mb-8">
				<div className="lg:col-span-4">
					<p className="my-8 text-xl capitalize">
						<span>{(regionsCodes as StringMapCodes).find((reg) => reg.code === region)?.name}</span>
						{town && <span>, {town}</span>}
					</p>
					<p className="text-4xl mb-2">{title}</p>
					<div className="my-2 flex gap-2">
						<Badge style={{ backgroundColor: getCategoryColor(category) }}>{category}</Badge>
						{tags.map((tag, index) => (
							<Badge key={index}>{tag}</Badge>
						))}
					</div>
				</div>
				<div className="lg:col-span-3 bg-sky-50 rounded-xl">
					<div className="flex flex-col">
						<img
							src={apiUrl + "/images/trips/" + _id + "/" + images[photoIndex]}
							alt="main-photo"
							className="h-[50vh] w-full object-cover rounded-t-3xl mb-1 shadow-2xl"
						/>
						<div className="flex flex-wrap">
							{images.map((img, index) => (
								<img
									src={apiUrl + "/images/trips/" + _id + "/" + img}
									key={index}
									onClick={() => setPhotoIndex(index)}
									className="h-[10vh] aspect-[1/1] object-cover cursor-pointer"
								/>
							))}
						</div>
						<div className="my-6 p-4">
							<p>{summary}</p>
							<p className="mt-2">{desc}</p>
						</div>
					</div>
				</div>
				<div className="lg:col-span-1 px-2">
					<div className="">
						{/* BLOC 1 */}
						<div className="bg-sky-200 mb-6 rounded-xl p-4 mt-12 lg:mt0">
							<p className="">
								<span className="font-bold">Duration : </span>
								{duration} day(s)/{duration - 1} night(s)
							</p>
							<p className="">
								<span className="font-bold">Proce/pers : </span>
								{formatAsEuros(adultPrice)}
							</p>
						</div>
						{/* BLOC 2 */}
						<div className="bg-sky-100 mb-6 rounded-xl p-1 flex flex-col">
							<Calendar
								mode="range"
								min={duration}
								max={duration}
								selected={date}
								onSelect={(selectedDate: DateRange | undefined) => setDate(selectedDate || initCalendarValue)}
								className="rounded-md w-full flex justify-center"
								disabled={{ before: date?.from || new Date() }}
							/>
							<Button className="mx-auto w-[200px]" onClick={() => setDate(initCalendarValue)}>
								Reset
							</Button>
							{date?.from && date?.to && (
								<div className="my-2">
									<p className="font-bold">Selected Dates : </p>
									<p>From : {rangeDateFormatter(date).from}</p>
									<p>To : {rangeDateFormatter(date).to}</p>
								</div>
							)}
						</div>
						{/* BLOC 3 */}
						<div className="mb-6 grid grid-cols-2 gap-2 bg-sky-100 rounded-xl p-2">
							<div className="col-span-1 ">
								<p>Adults : </p>
								<Select name="adults" onValueChange={(value) => setAdults(parseInt(value))}>
									<SelectTrigger className="w-full cursor-pointer bg-white text-black">
										<SelectValue placeholder={adults} />
									</SelectTrigger>
									<SelectContent className="w-full cursor-pointer bg-white text-black">
										{Array.from({ length: 6 }).map((_, index) => (
											<SelectItem value={index.toString()} key={index}>
												{index}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="col-span-1">
								<p>Kids : </p>
								<Select name="kids" onValueChange={(value) => setKids(parseInt(value))}>
									<SelectTrigger className="w-full cursor-pointer bg-white text-black">
										<SelectValue placeholder={kids} />
									</SelectTrigger>
									<SelectContent className="w-full cursor-pointer bg-white text-black">
										{Array.from({ length: 6 }).map((_, index) => (
											<SelectItem value={index.toString()} key={index}>
												{index}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="col-span-2">
								<p>
									Price for {adults} adults and {kids} kids :{" "}
								</p>
								<p className="font-bold">{formatAsEuros(adults * adultPrice + kids * youngPrice)}</p>
							</div>
						</div>
						{/* BLOC 4 */}
						{date?.from && date?.to && (
							<div className="flex flex-col bg-sky-200 rounded-xl p-2">
								<p className="font-bold underline">Summary</p>
								<p>
									{adults} adult(s) and {kids} kid(s)
								</p>
								<p>From : {rangeDateFormatter(date).from}</p>
								<p>To : {rangeDateFormatter(date).to}</p>
								<p className="mt-2 font-bold ml-auto">
									Total price : {formatAsEuros(adults * adultPrice + kids * youngPrice)}
								</p>
								<Link to="/checkout" className="ml-auto mt-2">
									<Button onClick={handleGoToCheckout}>Book</Button>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleTrip;
