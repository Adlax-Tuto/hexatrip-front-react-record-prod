import { localCustomFetch } from "@/axios/customFetch";
import { CustomInput } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ActionFunction, Form, Link, redirect } from "react-router-dom";

export const registerAction: ActionFunction = async ({ request }): Promise<Response | null> => {
	try {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		await localCustomFetch.post<string>("auth/register", data);
		return redirect("/login");
	} catch (error) {
		console.log(error);
		return null;
	}
};

const RegisterPage = () => {
	return (
		<section className="h-screen w-screen grid place-content-center">
			<Card className="w-96 bg-slate-50">
				<CardHeader className="text-center">Register</CardHeader>
				<CardContent className="">
					<Form method="POST">
						<CustomInput label="username" name="username" type="search" required classname="my-2 w-full" />
						<CustomInput label="email" name="email" type="search" required classname="my-2 w-full" />
						<CustomInput label="password" name="password" type="password" required classname="my-2 w-full" />
						<Button type="submit" className="my-2 w-full">
							Register
						</Button>
						<p className="text-center mt-2">
							Already a member ?
							<Button asChild type="button" variant="link">
								<Link to="/login">Login</Link>
							</Button>
						</p>
					</Form>
				</CardContent>
			</Card>
		</section>
	);
};
export default RegisterPage;
