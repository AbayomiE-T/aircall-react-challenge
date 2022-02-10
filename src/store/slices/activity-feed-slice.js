import { createSlice } from "@reduxjs/toolkit";

const activityFeedSlice = createSlice({
    name: 'activityFeed',
    initialState: {
        calls: [],
        callDetail: null
    },
    reducers: {
        getCalls(state, action) {
            state.calls = action.payload.calls;
        },

        getCallDetail(state, action) {
            state.callDetail = action.payload;
        }
    }
})

export const activityFeedActions = activityFeedSlice.actions;

export default activityFeedSlice;