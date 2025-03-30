import { Button } from "@/components/ui/button";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);

	if (isRouteErrorResponse(error) && error.status === 404) {
		return (
			<div className="flex flex-col gap-8 items-start align-center mt-12">
				<h1>Page not found</h1>
				<Button asChild size="lg" variant="default">
					<Link to="/">Bach Home</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-8 items-start align-center mt-12">
			<h1>There was an error...</h1>
			<Button asChild size="lg" variant="default">
				<Link to="/">Bach Home</Link>
			</Button>
		</div>
	);
};
export default ErrorPage;
