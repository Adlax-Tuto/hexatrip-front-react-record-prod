import { apiUrl, localCustomFetch } from "@/axios/customFetch";
import { CustomInput } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useAppSelector } from "@/hooks";
import { ReduxStore } from "@/store";
import { Trip } from "@/types/types";
import { regionsCodes } from "@/utils/filtersData";
import { formatAsEuros, hotelTax } from "@/utils/formatAsEuros";
import { singleDateFormatter } from "@/utils/singleTripData";
import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from "react-router-dom";

export const checkoutPageLoader =
	(store: ReduxStore): LoaderFunction =>
	async (): Promise<Trip | null> => {
		try {
			const checkout = store.getState().checkoutSlice;
			let { trip } = checkout;
			if (!trip) {
				const localStorageData = JSON.parse(localStorage.getItem("selection") || "");
				trip = localStorageData.trip;
			}
			const response = await localCustomFetch.get<Trip>(`/trips/${trip}`);
			return response.data;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

export const checkoutPageAction =
	(store: ReduxStore): ActionFunction =>
	async ({ request }): Promise<Response | null> => {
		try {
			const formData = await request.formData();
			const clientData = Object.fromEntries(formData);
			const purchaseData = store.getState().checkoutSlice;
			const token = store.getState().usersSlice.token;
			const emailFromStore = store.getState().usersSlice.user.email;
			if (!clientData.email) {
				clientData.email = emailFromStore;
			}
			const response = await localCustomFetch.post("/create-checkout-session", {
				items: [{ id: purchaseData.trip, quantity: 1, kids: purchaseData.kids, adults: purchaseData.adults }],
				order: { trip: purchaseData.trip, quantity: 1, kids: purchaseData.kids, adults: purchaseData.adults, ...clientData },
				token: token,
			});
			return redirect(`${response.data.url}`);
		} catch (error) {
			console.log(error);
			return null;
		}
	};

const CheckoutPage = () => {
	const selectedTripFromLoader = useLoaderData() as Trip;
	const checkoutDataFromStore = useAppSelector((state) => state.checkoutSlice);
	const userDataFromStore = useAppSelector((state) => state.usersSlice.user);

	const { adults, from, to, kids } = checkoutDataFromStore;
	const { _id, images, adultPrice, duration, region, title, town, youngPrice } = selectedTripFromLoader;

	const apiImageUrl = apiUrl + "/images/trips/" + _id + "/" + images[0];
	const totalPrice = adults * adultPrice + kids * youngPrice;

	return (
		<section className="align-center grid md:grid-cols-10 gap-x-8 justify-center items-start">
			{/* FORM FOR BUYER */}
			<Form method="POST" className="md:col-span-6 md:my-8 order-last md:order-first">
				<div className="bg-muted rounded-xl shadow-2xl p-8">
					<p className="text-4xl mb-4">Required Informations Before Purchase</p>
					<div className="flex flex-col gap-2">
						<div className="grid grid-cols-2 gap-2">
							<CustomInput
								label="first name"
								name="firstname"
								type="search"
								defaultValue={userDataFromStore?.firstname || ""}
								classname="w-full"
								required
							/>
							<CustomInput
								label="family name"
								name="familyname"
								type="search"
								defaultValue={userDataFromStore?.familyname || ""}
								classname="w-full"
								required
							/>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<CustomInput
								label="email"
								name="email"
								type="search"
								defaultValue={userDataFromStore?.email || ""}
								classname="w-full"
								required
							/>
							<CustomInput
								label="telephone"
								name="phone"
								type="search"
								defaultValue={userDataFromStore?.phone || ""}
								classname="w-full"
								required
							/>
						</div>
						<div className="grid grid-cols-1 gap-2">
							<CustomInput
								label="address"
								name="address"
								type="search"
								defaultValue={userDataFromStore?.address || ""}
								classname="w-full"
								required
							/>
						</div>
						<div className="grid grid-cols-3 gap-2">
							<CustomInput
								label="zip"
								name="zip"
								type="search"
								defaultValue={userDataFromStore?.zip || ""}
								classname="w-full"
								required
							/>
							<CustomInput
								label="town"
								name="town"
								type="search"
								defaultValue={userDataFromStore?.town || ""}
								classname="w-full"
								required
							/>
							<CustomInput
								label="country"
								name="country"
								type="search"
								defaultValue={userDataFromStore?.country || ""}
								classname="w-full"
								required
							/>
						</div>
					</div>
				</div>
				<div className="my-8 w-full">
					<Button className="rounded-xl shadow-2xl p-8 w-full" type="submit">
						Pay
					</Button>
				</div>
			</Form>
			{/* RECALL OF BOUGHT PRODUCT */}
			<div className="md:col-span-4 md:my-8">
				<Card className="bg-muted overflow-hidden rounded-xl shadow-2xl p-0">
					<CardHeader className="w-full p-0">
						<img src={apiImageUrl} alt="main-photo" className="h-full aspect-[2/1] object-cover" />
					</CardHeader>
					<CardContent className="my-4">
						<CardTitle>
							<p className="font-special font-bold text-4xl my-2">{title}</p>
							<p className="mb-3">
								{regionsCodes.find((reg) => reg.code === region)?.name}, {town}
							</p>
						</CardTitle>
						<CardDescription>
							<Table>
								<TableBody className="text-black">
									<TableRow>
										<TableCell className="font-bold">From</TableCell>
										<TableCell>{singleDateFormatter(new Date(from))}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold">To</TableCell>
										<TableCell>{singleDateFormatter(new Date(to))}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold">Duration</TableCell>
										<TableCell>
											{duration} day(s) / {duration - 1} night(s)
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold">People</TableCell>
										<TableCell>
											{adults} adult(s) and {kids} kid(s)
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardDescription>
					</CardContent>
				</Card>
				<Card className="bg-muted my-4 rounded-xl shadow-2xl">
					<CardContent>
						<p className="mt-2">Price</p>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="font-bold text-black">Tax</TableCell>
									<TableCell className="">{formatAsEuros(hotelTax)}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-bold text-black">Total</TableCell>
									<TableCell className="">{formatAsEuros(totalPrice + hotelTax)}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};
export default CheckoutPage;
