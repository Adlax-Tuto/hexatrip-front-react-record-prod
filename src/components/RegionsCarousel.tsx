import { regionsCarouselData } from "@/utils/regionsCarouselData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const RegionsCarousel = () => {
	return (
		<section className="">
			<div className="">
				<Carousel className="relative" plugins={[Autoplay({ delay: 5000 }), Fade()]} opts={{ align: "start", loop: true }}>
					<CarouselContent>
						{regionsCarouselData.map((region, index) => (
							<CarouselItem key={index}>
								<Link to={`/research?region=${region.region}`}>
									<Card className="relative p-0">
										<CardContent className="flex items-center justify-center p-0 overflow-hidden max-h-[70vh]">
											<img src={region.photo} alt="" className="h-full w-full object-cover" />
											<p className="absolute top-[5%] left-[50%] -translate-x-[50%] capitalize text-[5rem] text-white italic text-shadow">
												{region.name}
											</p>
										</CardContent>
									</Card>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute top-[50%] -left-[20px]  -translate-y-[50%] bg-amber-400 hover:bg-rose-400 border-0 hover:scale-105 p-6 mx-8" />
					<CarouselNext className="absolute top-[50%] -right-[20px] -translate-y-[50%] bg-amber-400 hover:bg-rose-400 border-0 hover:scale-105 p-6 mx-8" />
				</Carousel>
			</div>
		</section>
	);
};
export default RegionsCarousel;
