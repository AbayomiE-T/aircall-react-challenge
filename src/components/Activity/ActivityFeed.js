import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import ActivityItem from './ActivityItem';

const ActivityFeed = () => {
    const calls = useSelector(state => state.activities.calls);
    const showAllCalls = useSelector(state => state.ui.showAll);

    const filterForMissedCalls = () => {
        return calls.filter((call) => call.call_type === "missed")
            .map((call) => {
                return (
                    <ActivityItem
                        key={call.id}
                        id={call.id}
                        date={call.created_at}
                        from={call.from}
                        to={call.to}
                        via={call.via}
                        direction={call.direction}
                        callType={call.call_type}
                    />
                )
            });
    }

    const showMissedCalls = calls.length !== 0 ? filterForMissedCalls() : [];
    return (
        <Fragment>
            {showAllCalls && calls.length !== 0 && calls.map((call) => {
                if (!call['is_archived']) {
                    return (<ActivityItem
                        key={call.id}
                        id={call.id}
                        date={call.created_at}
                        from={call.from}
                        to={call.to}
                        via={call.via}
                        direction={call.direction}
                        callType={call.call_type}
                    />)
                }
            })}
            {!showAllCalls && showMissedCalls}
        </Fragment>
    )
}

export default ActivityFeed