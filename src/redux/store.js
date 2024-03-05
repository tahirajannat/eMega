import { configureStore } from '@reduxjs/toolkit';
import initialReducer from './reducers/initialSlice';
import productReducer from './reducers/productSlice';
export const store = configureStore({
    reducer: {
        product: productReducer,
        initialData: initialReducer,
    },
});
