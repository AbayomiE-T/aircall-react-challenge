import { uiActions } from "../slices/ui-slice";

export const showAllCalls = () => {
    return (dispatch) => {
        dispatch(uiActions.showAllCalls());
    }
}

export const showMissedCalls = () => {
    return (dispatch) => {
        dispatch(uiActions.showMissedCalls());
    }
}