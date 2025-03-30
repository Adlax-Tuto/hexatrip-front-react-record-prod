import LinksDesktop from "./LinksDesktop";
import LinksMobile from "./LinksMobile";

const Navbar = () => {
	return (
		<nav className="border-t-2 border-b-2">
			<div className="align-center py-5">
				<LinksMobile />
				<LinksDesktop />
			</div>
		</nav>
	);
};
export default Navbar;
