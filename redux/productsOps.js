import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://600af538778d1a0017794c59.mockapi.io';

export const fetchProducts = createAsyncThunk('products/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/products');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const fetchProductDetails = createAsyncThunk('products/fetchOne', async (productId, thunkAPI) => {
    try {
        const response = await axios.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
