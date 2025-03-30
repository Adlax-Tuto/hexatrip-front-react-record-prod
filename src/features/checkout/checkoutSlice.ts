import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
	trip: null,
	from: null,
	to: null,
	adults: null,
	kids: null,
};

const getCheckoutFromLocalStorage = () => {
	const selection = localStorage.getItem("selection");
	if (!selection) {
		return defaultState;
	}
	return { ...JSON.parse(selection) };
};

const initialState = getCheckoutFromLocalStorage();

const checkoutSlice = createSlice({
	name: "checkout",
	initialState: initialState,
	reducers: {
		setCheckout: (state, action) => {
			const { trip, from, to, adults, kids } = action.payload;
			state.trip = trip;
			state.from = from;
			state.to = to;
			state.adults = adults;
			state.kids = kids;
			localStorage.setItem("selection", JSON.stringify(action.payload));
		},
		cleanCheckout: (state) => {
			state.trip = null;
			state.from = null;
			state.to = null;
			state.adults = null;
			state.kids = null;
			localStorage.removeItem("selection");
		},
	},
	extraReducers: () => {},
});

export const { setCheckout, cleanCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;
