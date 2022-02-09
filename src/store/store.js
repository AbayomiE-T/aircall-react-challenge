import { configureStore } from "@reduxjs/toolkit";
import activityFeedSlice from './slices/activity-feed-slice.js'
import uiSlice from "./slices/ui-slice.js";

const store = configureStore({
    reducer: { activities: activityFeedSlice.reducer, ui: uiSlice.reducer }
})

export default store;