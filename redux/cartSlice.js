import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem(state, action) {
            const item = state.items.find(item => item.id === action.payload.id);
            if (!item) {
                state.items.push(action.payload);
            }
        },
        updateItem(state, action) {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
                item.total = item.price * item.quantity;
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => {
                return item.id !== action.payload
            });
        }
    }
});

export const { addItem, updateItem, removeItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
