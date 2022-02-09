import { configureStore } from "@reduxjs/toolkit";
import activityFeedSlice from './slices/activity-feed-slice.js'

const store = configureStore({
    reducer: { activities: activityFeedSlice.reducer }
})

export default store;