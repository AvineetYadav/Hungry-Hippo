import { createSlice } from "@reduxjs/toolkit";

const BodySlice = createSlice({
    name: 'bodySlice',
    initialState: {
        fetchData:[],
    },
    reducers: {
        addFetchData: (state, action) => {
            state.fetchData = action.payload;
        }
    }
})

export const { addFetchData } = BodySlice.actions;
export default BodySlice.reducer;