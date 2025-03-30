import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logoutUser } from "@/features/users/usersSlice";

const UserBar = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const userData = useAppSelector((state) => state.usersSlice.user);

	const handleLogout = () => {
		dispatch(logoutUser());
		navigate("/");
	};

	return (
		<header className="border-b-2 bg-slate-100">
			<div className="align-center flex justify-end py-1">
				{userData?.username ? (
					<div className="flex items-center gap-4">
						<p>
							Hey welcome back, <span className="text-sky-600 capitalize">{userData.username}</span>
						</p>
						<Button variant="outline" size="sm" onClick={handleLogout} className="hover-btn">
							Logout
						</Button>
					</div>
				) : (
					<div className="flex items-center gap-6">
						<Button asChild variant="link" size="lg" className="hover-btn p-0">
							<Link to={"/login"}>Sign In</Link>
						</Button>
						<Button asChild variant="link" size="lg" className="hover-btn p-0">
							<Link to={"/register"}>Register</Link>
						</Button>
					</div>
				)}
			</div>
		</header>
	);
};
export default UserBar;
