import { Link } from "@/types/types";
import { links } from "@/utils/navbarData";
import { NavLink, useLocation } from "react-router-dom";

const LinksDesktop = () => {
	const location = useLocation();

	return (
		<div className="w-full hidden lg:flex justify-between items-center">
			{links.map((link) => {
				const { ref, label } = link as Link;
				const isActive = location.pathname + location.search === ref;
				return (
					<NavLink
						to={ref}
						key={label}
						className={`capitalize tracking-wide text-black hover:text-amber-600 ${isActive ? "underline" : ""}`}
					>
						{label}
					</NavLink>
				);
			})}
		</div>
	);
};
export default LinksDesktop;
