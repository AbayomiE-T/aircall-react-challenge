import { activityFeedActions } from "../slices/activity-feed-slice";

const baseUrl = "https://aircall-job.herokuapp.com";

export const getCallData = () => {
    return async (dispatch) => {
        const fetchCalls = async () => {
            const response = await fetch(`${baseUrl}/activities`);

            if (!response.ok) {
                throw new Error('Could not fetch the calls :(');
            }

            const data = await response.json();

            return data;
        }

        try {
            const calls = await fetchCalls()

            dispatch(activityFeedActions.getCalls({ calls }));
        }
        catch (error) {
            console.log(error);
        }

    }
}