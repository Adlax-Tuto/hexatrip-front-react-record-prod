import { textContents, textTitles } from "@/utils/whyustextData";

const WhyUsText = () => {
	return (
		<section className="py-8 bg-gray-100">
			<div className="align-center grid lg:grid-cols-3 gap-4">
				{textTitles.map((title, index) => (
					<div key={index}>
						<div className="font-bold text-xl mb-4">{title}</div>
						{textContents[index].map((sentence, index) => (
							<div key={index} className="my-3">
								{sentence}
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
};
export default WhyUsText;
