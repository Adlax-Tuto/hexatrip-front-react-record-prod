import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
	const error = useRouteError();
	console.log(error);

	return (
		<h4 className="align-center min-h-[100vh]">
			<p>There was an error...</p>
			<p>Navigate away</p>
		</h4>
	);
};

export default ErrorElement;
