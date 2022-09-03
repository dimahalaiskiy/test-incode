import { configureStore } from "@reduxjs/toolkit";
import tickerSlice from "./slicers/tickerSlice";

export default configureStore({
	reducer: {
		tickers: tickerSlice,
	},
});
