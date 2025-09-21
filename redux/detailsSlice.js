import { createSlice } from '@reduxjs/toolkit';
import { fetchProductDetails } from './productsOps.js';

const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        item: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDetails.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.item = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const detailsReducer = detailsSlice.reducer;
