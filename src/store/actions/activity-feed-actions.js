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
            console.log(error.message);
        }

    }
}

export const getCallDetail = (id) => {
    return async (dispatch) => {
        const fetchCallDetail = async () => {
            const response = await fetch(`${baseUrl}/activities/${id}`);

            if (!response.ok) {
                throw new Error('Could not fetch call detail :(')
            }

            const data = await response.json();

            return data;
        }

        try {
            const callDetail = await fetchCallDetail();

            dispatch(activityFeedActions.getCallDetail(callDetail));
        }
        catch (error) {
            console.log(error.message);
        }
    }
}

export const addToArchives = (id) => {
    return async (dispatch) => {
        const archiveCall = async () => {
            const response = await fetch(`${baseUrl}/activities/${id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "is_archived": false })
                })

            if (!response.ok) {
                throw new Error("Could not archive call data :(");
            }
        }

        try {
            await archiveCall();

            dispatch(activityFeedActions.addToArchives(id))
        }
        catch (error) {
            console.log(error.message);
        }
    }
}