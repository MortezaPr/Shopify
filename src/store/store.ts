import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartReducer from "./shoppingCartSlice";

export const store = configureStore({
  reducer: { shoppingCart: ShoppingCartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
