import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUserThunk, updateUserThunk } from "./usersThunks";

export const updateUser = createAsyncThunk("users/updateUserThunk", updateUserThunk);
export const deleteUser = createAsyncThunk("users/deleteUserThunk", deleteUserThunk);

const defaultState = {
	status: { isLoading: false },
	user: {
		username: null,
		email: null,
		firstname: null,
		familyname: null,
		phone: null,
		address: null,
		zip: null,
		town: null,
		country: null,
		_id: null,
	},
	token: {
		token: null,
	},
};

const getUserFromLocalStorage = () => {
	const user = localStorage.getItem("user");
	if (!user) {
		return defaultState.user;
	}
	return { ...JSON.parse(user) };
};

const getTokenFromLocalStorage = () => {
	const token = localStorage.getItem("token");
	if (!token) {
		return defaultState.token;
	}
	return { token: JSON.parse(token) };
};

const initialState = {
	status: defaultState.status,
	user: getUserFromLocalStorage(),
	token: getTokenFromLocalStorage(),
};

const usersSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		loginUser: (state, action) => {
			state.status.isLoading = false;
			state.user = action.payload.user;
			state.token.token = action.payload.token;
			localStorage.setItem("user", JSON.stringify(action.payload.user));
			localStorage.setItem("token", JSON.stringify(action.payload.token));
		},
		logoutUser: (state) => {
			state.status = defaultState.status;
			state.user = defaultState.user;
			state.token = defaultState.token;
			localStorage.removeItem("user");
			localStorage.removeItem("token");
		},
	},
	extraReducers: (builder) => {
		builder
			//updateUser action pending
			.addCase(updateUser.pending, (state) => {
				state.status.isLoading = true;
			})
			//updateUser action rejected
			.addCase(updateUser.rejected, (state) => {
				state.status.isLoading = false;
			})
			//updateUser action fulfilled
			.addCase(updateUser.fulfilled, (state, { payload }) => {
				state.status.isLoading = false;
				state.user = payload;
				localStorage.setItem("user", JSON.stringify(payload));
			})
			//deleteUser action pending
			.addCase(deleteUser.pending, (state) => {
				state.status.isLoading = true;
			})
			//deleteUser action rejected
			.addCase(deleteUser.rejected, (state) => {
				state.status.isLoading = false;
			})
			//deleteUser action fulfilled
			.addCase(deleteUser.fulfilled, (state) => {
				state.status.isLoading = false;
				state.user = defaultState.user;
				localStorage.remove("user");
			});
	},
});

export const { loginUser, logoutUser } = usersSlice.actions;

export default usersSlice.reducer;
