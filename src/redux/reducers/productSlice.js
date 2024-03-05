// wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state based on the provided JSON data
const initialState = {
    products: [{ product_name: 'hello' }],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateProductSlice(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },

        getProductSlice(state, action) {
            return { ...state, ...action.payload };
        },
    },
});
export const selectProduct = (state) => state.products;

// Export the reducer and actions
export const { updateProductSlice, getProductSlice } = productSlice.actions;
export default productSlice.reducer;
