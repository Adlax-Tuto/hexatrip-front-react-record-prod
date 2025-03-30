import { galleryImages } from "@/utils/galleryData";

const Gallery = () => {
	return (
		<section className="w-full">
			<div className="grid auto-rows-fr grid-cols-2 md:grid-cols-5">
				{galleryImages.map((image, index) => {
					if (index === 0) {
						return (
							<div className="overflow-hidden md:col-span-2 md:row-span-2" key={index}>
								<img
									src={image}
									alt={image}
									className="w-full h-full object-cover transition-all hover:scale-105"
								/>
							</div>
						);
					} else if (index === 5) {
						return (
							<div className="overflow-hidden hidden md:flex" key={index}>
								<img src={image} alt={image} className="w-full h-full object-cover mix-blend-hard-light" />
							</div>
						);
					} else {
						return (
							<div className="overflow-hidden" key={index}>
								<img
									src={image}
									alt={image}
									className="w-full h-full object-cover transition-all hover:scale-105"
								/>
							</div>
						);
					}
				})}
			</div>
		</section>
	);
};
export default Gallery;
