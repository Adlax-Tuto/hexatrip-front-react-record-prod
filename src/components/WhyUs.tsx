import { blocksText, footerText, headerText } from "@/utils/whyusData";

const WhyUs = () => {
	return (
		<section className="py-8 font-bold whyus">
			<div className="align-center py-6">
				<div className="text-center text-3xl font-bold mb-8">
					<p className="font-special text-6xl font-bold">{headerText}</p>
				</div>
				<div className="grid md:grid-cols-3 gap-12">
					{blocksText.map((bloc, index) => (
						<div className="grid grid-cols-4 gap-1" key={index}>
							<div className="w-full">
								<img src={bloc.icon} alt="icon" className="w-full max-w-[50px] object-contain" />
							</div>
							<div className="col-span-3">
								<p>{bloc.text}</p>
							</div>
						</div>
					))}
				</div>
				<div className="text-center flex justify-center items-center mt-4">
					<div className="max-w-[30px]">
						<img src={footerText.icon} alt="footer-icon" />
					</div>
					<div>
						<p>{footerText.text}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default WhyUs;
