import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectFilterName } from './filtersSlice';
import { fetchProducts } from './productsOps.js';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const productsReducer = productsSlice.reducer;

const selectProducts = (state) => {
    return state.products.items;
};
const selectFilter = (state) => selectFilterName(state);

export const selectFilteredProducts = createSelector([selectProducts, selectFilter], (products, filter) => {
    return products.filter(product => {
        return product.tags.includes(filter);
    });
});
