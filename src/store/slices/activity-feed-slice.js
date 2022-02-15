import { createSlice } from "@reduxjs/toolkit";

const activityFeedSlice = createSlice({
    name: 'activityFeed',
    initialState: {
        calls: [],
        callDetail: null,
        archivedCalls: []
    },
    reducers: {
        getCalls(state, action) {
            state.calls = action.payload.calls;
        },

        getCallDetail(state, action) {
            state.callDetail = action.payload;
        },

        addToArchives(state, action) {
            const callToArchive = state.calls.find((call) => call.id === action.payload);
            callToArchive['is_archived'] = true;
            state.archivedCalls.push(callToArchive);
        }
    }
})

export const activityFeedActions = activityFeedSlice.actions;

export default activityFeedSlice;