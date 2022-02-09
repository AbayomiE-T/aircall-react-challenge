import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import ActivityItem from './ActivityItem';

const ActivityFeed = () => {
    const calls = useSelector(state => state.activities.calls);
    return (
        <Fragment>
            {calls.length !== 0 && calls.map((call) => {
                return (<ActivityItem
                    key={call.id}
                    date={call.created_at}
                    from={call.from}
                    to={call.to}
                    via={call.via}
                    direction={call.direction}
                    callType={call.call_type}
                />)
            })}
        </Fragment>
    )
}

export default ActivityFeed