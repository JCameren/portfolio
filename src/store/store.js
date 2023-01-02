import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui/ui-slice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
  });

const makeStore = () => store

export const wrapper = createWrapper(makeStore);
