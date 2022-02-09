import { createSlice } from "@reduxjs/toolkit";

const activityFeedSlice = createSlice({
    name: 'activityFeed',
    initialState: {
        calls: []
    },
    reducers: {
        getCalls(state, action) {
            state.calls = action.payload.calls;
        }
    }
})

export const activityFeedActions = activityFeedSlice.actions;

export default activityFeedSlice;