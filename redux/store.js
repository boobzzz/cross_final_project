import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import { cartReducer } from './cartSlice';
import { detailsReducer } from './detailsSlice';

const rootReducer = {
    products: productsReducer,
    details: detailsReducer,
    cart: cartReducer
};

export const store = configureStore({
    reducer: rootReducer
});
