import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./features/checkout/checkoutSlice";
import usersReducer from "./features/users/usersSlice";

export const store = configureStore({
	reducer: {
		checkoutSlice: checkoutReducer,
		usersSlice: usersReducer,
	},
});

// standard types for redux with typescript :
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// thunks types for redux with typescript :
export type AsyncThunkConfig = {
	state: RootState;
	dispatch: AppDispatch;
	rejectValue: { error: string };
};

// loaders and actions types for redux with typescript :
export type ReduxStore = {
	getState: () => RootState;
	dispatch: AppDispatch;
};
