import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import { detailsReducer } from './detailsSlice';
import { filtersReducer } from './filtersSlice';
import { cartReducer } from './cartSlice';

const rootReducer = {
    products: productsReducer,
    details: detailsReducer,
    filters: filtersReducer,
    cart: cartReducer
};

export const store = configureStore({
    reducer: rootReducer
});
