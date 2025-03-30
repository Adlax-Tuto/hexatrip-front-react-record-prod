import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const PreFooter = () => {
	return (
		<div className="w-full min-h-[10vh] bg-sky-950 text-white place-content-center">
			<div className="align-center flex flex-col md:flex-row justify-between items-center">
				<div>
					<p className="text-2xl font-bold">Follow us on social medias!</p>
				</div>
				<div className="flex gap-8 items-center">
					<Facebook size="35" className="hover-btn" />
					<Linkedin size="35" className="hover-btn" />
					<Twitter size="35" className="hover-btn" />
					<Instagram size="35" className="hover-btn" />
					<Youtube size="35" className="hover-btn" />
				</div>
			</div>
		</div>
	);
};
export default PreFooter;
