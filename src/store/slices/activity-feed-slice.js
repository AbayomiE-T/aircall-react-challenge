import { createSlice, current } from "@reduxjs/toolkit";

const activityFeedSlice = createSlice({
    name: 'activityFeed',
    initialState: {
        calls: [],
        callDetail: null,
        archivedCalls: localStorage.getItem('archivedCalls') ?
            JSON.parse(localStorage.getItem('archivedCalls')) : []
    },
    reducers: {
        getCalls(state, action) {
            state.calls = action.payload.calls;
        },

        getCallDetail(state, action) {
            state.callDetail = action.payload;
        },

        addToArchives(state, action) {
            const id = +action.payload;
            const callToArchive = state.calls.find((call) => call.id === id);
            callToArchive['is_archived'] = true;
            state.archivedCalls.push(callToArchive);

            cacheArchivedCalls(state.archivedCalls);
        }
    }
})

const cacheArchivedCalls = (calls) => {
    localStorage.setItem('archivedCalls', JSON.stringify([...calls]));
}

export const activityFeedActions = activityFeedSlice.actions;

export default activityFeedSlice;