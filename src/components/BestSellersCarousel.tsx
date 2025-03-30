import { apiUrl, localCustomFetch } from "@/axios/customFetch";
import { Trip } from "@/types/types";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

const BestSellersCarousel = () => {
	const [entities, setEntities] = useState<Trip[]>([]);

	const fetchEntities = async (): Promise<void> => {
		try {
			const response = await localCustomFetch.get<Trip[]>("trips/bestsellers");
			setEntities(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchEntities();
	}, []);

	return (
		<section className="py-6 my-12">
			<div className="align-center relative">
				<h1 className="text-6xl text-center my-3 font-special font-bold text-sky-700">Bestsellers</h1>
				<Carousel className="relative" plugins={[Autoplay({ delay: 6000 }), Fade()]} opts={{ align: "start", loop: true }}>
					<CarouselContent className="h-[400px]">
						{entities.map((trip, index) => (
							<CarouselItem key={index} className="h-full">
								<Link to={`/research/${trip._id}`}>
									<Card className="h-full p-0">
										<CardContent className="flex items-center justify-center p-0 h-full">
											<img
												src={
													apiUrl +
													"/images/trips/" +
													trip._id +
													"/" +
													trip.images[0]
												}
												alt="bestseller-photo"
												className="h-full w-full object-cover"
											/>
											<p className="text-center w-full capitalize absolute top-[20%] left-[50%] -translate-x-[50%] text-4xl sm:text-5xl md:text-6xl text-white italic text-shadow">
												{trip.title}
											</p>
											<p className="absolute top-[40%] left-[50%] -translate-x-[50%] text-3xl h-full text-white tracking-widest underline text-shadow">
												{trip.town}
											</p>
										</CardContent>
									</Card>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute top-[50%] -left-[20px]  -translate-y-[50%] bg-amber-400 hover:bg-rose-400 border-0 hover:scale-110" />
					<CarouselNext className="absolute top-[50%] -right-[20px] -translate-y-[50%] bg-amber-400 hover:bg-rose-400 border-0 hover:scale-110" />
				</Carousel>
			</div>
		</section>
	);
};

export default BestSellersCarousel;
