import Title from "@/components/Title";
import { hotlineData } from "@/utils/hotlineData";

const HotlinePage = () => {
	return (
		<section className="my-8 min-h-[50vh]">
			<div className="align-center">
				<div className="flex flex-col gap-8 md:flex-row md:items-start">
					<Title text="hotline" classname="m-0 p-0 text-4xl capitalize" />
					<div className="h-[300px] w-[300px] shrink-0">
						<img src={hotlineData.src} alt="hotline-logo" className="h-full w-full object-cover rounded-full" />
					</div>
					<div className="max-w-[50%] mt-6">
						<p className="">{hotlineData.text}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HotlinePage;
