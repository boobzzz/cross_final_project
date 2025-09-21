import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import { cartReducer } from './cartSlice';

const rootReducer = {
    products: productsReducer,
    cart: cartReducer
};

export const store = configureStore({
    reducer: rootReducer
});
