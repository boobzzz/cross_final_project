import axios from 'axios';

export const baseUrl = 'https://600af538778d1a0017794c59.mockapi.io';

export const fetchProductDetails = async (productId) => {
    const response = await axios.get(`${baseUrl}/products/${productId}`);
    return response.data;
};
