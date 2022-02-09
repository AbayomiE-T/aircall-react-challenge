import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showAll: true
    },
    reducers: {
        showAllCalls(state) {
            state.showAll = true;
        },

        showMissedCalls(state) {
            state.showAll = false;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;