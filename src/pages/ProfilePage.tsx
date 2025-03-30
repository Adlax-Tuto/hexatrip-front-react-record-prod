import { localCustomFetch } from "@/axios/customFetch";
import { CustomInput } from "@/components";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { deleteUser, logoutUser, updateUser } from "@/features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { ReduxStore } from "@/store";
import { Order, Profile, ProfilePageLoaderType } from "@/types/types";
import { formatAsEuros, hotelTax } from "@/utils/formatAsEuros";
import { useConfirm } from "material-ui-confirm";
import { FormEvent } from "react";
import { LoaderFunction, redirect, useLoaderData, useNavigate } from "react-router-dom";

export const profilepageLoader =
	(store: ReduxStore): LoaderFunction =>
	async (): Promise<Response | ProfilePageLoaderType | null> => {
		const user = store.getState().usersSlice.user;
		const token = store.getState().usersSlice.token.token;
		if (!user?.username) {
			return redirect("/login");
		}
		try {
			const responseProfile = await localCustomFetch.get<Profile>("/profile", { headers: { Authorization: `Bearer ${token}` } });
			const responseOrders = await localCustomFetch.get<Order[]>("/orders", { headers: { Authorization: `Bearer ${token}` } });
			return { ...responseProfile.data, orders: responseOrders.data };
		} catch (error) {
			console.log(error);
			return null;
		}
	};

const ProfilePage = () => {
	const profile = useLoaderData() as ProfilePageLoaderType;
	const { isLoading } = useAppSelector((state) => state.usersSlice.status);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const confirm = useConfirm();

	const handleUpdate = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const formData = new FormData(evt.currentTarget);
		const profileData = Object.fromEntries(formData);
		dispatch(updateUser({ id: profile._id, data: profileData }));
	};

	const handleDelete = async () => {
		try {
			const result = await confirm({
				title: "Are you sure you want to delete your account?",
				description: "You'll be redirected to the main page. Your account data will be lost.",
				confirmationText: "Proceed",
				cancellationText: "Cancel",
			});
			if (result.confirmed) {
				dispatch(deleteUser({ id: profile._id }));
				dispatch(logoutUser());
				navigate("/");
			}
		} catch (error) {
			console.log("Canceled", error);
		}
	};

	return (
		<section className="min-h-[70vh]">
			<div className="align-center my-8">
				<div className="">
					<Title text="profile" />
					<div className="lg:ml-32 grid grid-cols-1 sm:grid-cols-2">
						<div className="">
							<p>
								<span className="font-bold">Name : </span>
								{profile?.username}
							</p>
							<p>
								<span className="font-bold">Email : </span>
								{profile?.email}
							</p>
						</div>
						<div className="">
							<form method="POST" onSubmit={handleUpdate} className="flex flex-col gap-2">
								{/* firstname - input */}
								<CustomInput
									label="firstname"
									name="firstname"
									type="search"
									defaultValue={profile.firstname || ""}
									classname="w-full"
								/>
								{/* familyname - input */}
								<CustomInput
									label="familyname"
									name="familyname"
									type="search"
									defaultValue={profile.familyname || ""}
									classname="w-full"
								/>
								{/* address - input */}
								<CustomInput
									label="address"
									name="address"
									type="search"
									defaultValue={profile.address}
									classname="w-full"
								/>
								{/* town - input */}
								<CustomInput
									label="town"
									name="town"
									type="search"
									defaultValue={profile.town}
									classname="w-full"
								/>
								{/* zip - input */}
								<CustomInput
									label="zip"
									name="zip"
									type="search"
									defaultValue={profile.zip}
									classname="w-full"
								/>
								{/* country - input */}
								<CustomInput
									label="country"
									name="country"
									type="search"
									defaultValue={profile.country}
									classname="w-full"
								/>
								{/* phone - input */}
								<CustomInput
									label="phone"
									name="phone"
									type="search"
									defaultValue={profile.phone}
									classname="w-full"
								/>
								{/* Send button */}
								{isLoading ? (
									<Button
										type="submit"
										size="lg"
										className="text-xl py-4 my-2 w-full bg-slate-100"
										disabled
									>
										Updating...
									</Button>
								) : (
									<Button type="submit" size="lg" className="text-xl py-4 my-2 w-full">
										Update
									</Button>
								)}
								{/* Delete button */}
								<Button
									type="button"
									variant="destructive"
									size="lg"
									className="text-xl py-4 my-2 w-full"
									onClick={handleDelete}
								>
									Delete Account
								</Button>
							</form>
						</div>
					</div>
				</div>
				<div className="">
					<Title text="your orders" />
					<div className="lg:ml-32">
						{profile.orders.length > 0 ? (
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Trip title</TableHead>
										<TableHead>Client email</TableHead>
										<TableHead>Client first name</TableHead>
										<TableHead>Client family name</TableHead>
										<TableHead>Paid total price</TableHead>
										<TableHead>For</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{profile.orders.map((order, index) => {
										const { trip, email, familyname, firstname, adults, kids } = order;
										const { title, adultPrice, youngPrice, duration } = trip;
										const totalPrice = adultPrice * adults + youngPrice * kids;
										return (
											<TableRow key={index}>
												<TableCell className="font-medium">{title}</TableCell>
												<TableCell>{email}</TableCell>
												<TableCell>{firstname}</TableCell>
												<TableCell>{familyname}</TableCell>
												<TableCell>{formatAsEuros(totalPrice + hotelTax)}</TableCell>
												<TableCell>
													{duration} day(s)/{duration - 1} night(s) with {adults}{" "}
													adult(s) and {kids} kid(s){" "}
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						) : (
							<p>No orders</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
export default ProfilePage;
