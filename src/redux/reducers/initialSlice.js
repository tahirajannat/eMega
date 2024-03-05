import { createSlice } from '@reduxjs/toolkit';

// Define the initial state based on the provided JSON data
const initialState = {};

// Create a slice of state and reducers
const initialSlice = createSlice({
    name: 'initialState',
    initialState,
    reducers: {
        // Add a reducer for each action to update the state
        setInitialData(state, action) {
            return action.payload;
        },
    },
});

// Export the reducer and actions
export const { setInitialData } = initialSlice.actions;
export default initialSlice.reducer;
