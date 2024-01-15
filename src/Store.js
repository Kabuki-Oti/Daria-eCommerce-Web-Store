import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./Features/Slices/sliderSlice";
import productsReducer from "./Features/Slices/productsSlice";
import cartReducer from "./Features/Slices/cartSlice";
import authReducer from "./Features/Slices/authSlice"

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer,
        cart: cartReducer,
        user: authReducer
    }
});