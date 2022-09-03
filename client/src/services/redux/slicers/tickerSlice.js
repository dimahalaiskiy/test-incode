import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tickers: [],
};

const tickerSlice = createSlice({
	name: "ticker",
	initialState,
	reducers: {
		initializeTickers: (state, action) => {
			state.tickers = action.payload;
		},
	},
});

export const { initializeTickers } = tickerSlice.actions;

export default tickerSlice.reducer;
