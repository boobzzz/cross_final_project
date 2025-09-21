import { createSlice } from '@reduxjs/toolkit';
import { FILTERS } from '../utils/constants';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        name: FILTERS.ALL,
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        }
    }
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const selectFilterName = (state) => state.filters.name;