import { useEffect } from "react";
import animation from "../assets/gifs/congratulations-7600_512.gif";
import { useAppDispatch } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { cleanCheckout } from "@/features/checkout/checkoutSlice";

const CheckoutSuccessPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(cleanCheckout());
		setTimeout(() => navigate("/"), 5000);
	}, []);

	return (
		<section className="mt-32">
			<div className="align-center text-center">
				<p className="text-4xl">Congratulations. Payment was successful.</p>
				<p className="text-4xl">A proof of purchase will be sent to your email.</p>
				<p className="text-xl">Enjoy your trip !</p>
				<img src={animation} alt="animation" className="mx-auto" />
				<p className="mt-8">You ll be redirected to home page in a few seconds...</p>
			</div>
		</section>
	);
};
export default CheckoutSuccessPage;
