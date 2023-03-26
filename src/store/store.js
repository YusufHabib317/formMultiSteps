import { configureStore } from "@reduxjs/toolkit";
import plansReducer from "./slices/plansSlice";

export const store = configureStore({
  reducer: {
    plans: plansReducer,
  },
});
