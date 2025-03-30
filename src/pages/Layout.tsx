import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, Navbar, PreFooter, UserBar } from "../components";
import { useEffect } from "react";

const Layout = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<UserBar />
			<Header />
			<Navbar />
			<Outlet />
			<PreFooter />
			<Footer />
		</>
	);
};
export default Layout;
