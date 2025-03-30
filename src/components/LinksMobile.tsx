import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { links } from "@/utils/navbarData";
import { Link } from "@/types/types";
import { NavLink, useLocation } from "react-router-dom";

const LinksMobile = () => {
	const location = useLocation();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="lg:hidden">
				<Button variant="outline" size="icon">
					<AlignLeft />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="lg:hidden" align="start" sideOffset={10}>
				{links.map((link) => {
					const { ref, label } = link as Link;
					const isActive = location.pathname + location.search === ref;
					return (
						<DropdownMenuItem key={label}>
							<NavLink
								to={ref}
								key={label}
								className={`capitalize tracking-wide text-black hover:text-amber-600 ${
									isActive ? "underline" : ""
								}`}
							>
								{label}
							</NavLink>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
export default LinksMobile;
