import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.webp";

import { ContactRound, MapPinHouse, Phone, UserRound } from "lucide-react";

const Header = () => {
	return (
		<header className="w-full text-sky-700">
			<div className="align-center h-full flex flex-col md:flex-row justify-between items-center">
				<div className="h-full place-content-center">
					<Link to="/" className="flex items-center hover-btn">
						<div className="h-20 w-20">
							<img src={logo} alt="brand-logo" className="w-full h-full rounded-full object-cover" />
						</div>
						<p className="font-special text-6xl mr-auto ml-2">HexaTrip</p>
					</Link>
				</div>
				<div className="self-end h-full flex justify-between items-center gap-3 mx-auto md:mr-0">
					<Link to="/agencies" className="flex flex-col items-center hover-btn">
						<MapPinHouse size="45" className="bordered rounded-full p-2" />
						<p className="text-[0.7rem] w-max-[2]">Our agencies</p>
					</Link>
					<Link to="/advisors" className="flex flex-col items-center hover-btn">
						<UserRound size="45" className="bordered rounded-full p-2" />
						<p className="text-[0.7rem] w-max-[2]">Our advisors</p>
					</Link>
					<Link to="/hotline" className="flex flex-col items-center hover-btn">
						<Phone size="45" className="bordered rounded-full p-2" />
						<p className="text-[0.7rem] w-max-[2]">0125869578</p>
					</Link>
					<Link to="/profile" className="flex flex-col items-center hover-btn">
						<ContactRound size="45" className="bordered rounded-full p-2" />
						<p className="text-[0.7rem] w-max-[2]">Your account</p>
					</Link>
				</div>
			</div>
		</header>
	);
};
export default Header;
