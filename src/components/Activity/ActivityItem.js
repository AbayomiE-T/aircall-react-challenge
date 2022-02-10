import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'

const ActivityItem = (props) => {
    return (
        <Link to={`/activities/${props.id}`}>
            <Card>
                <div>[Insert icon here]</div>
                <div>
                    <h2>{props.from}</h2>
                    {props.callType === "voicemail" && (<span>left a voice message</span>)}
                    {props.callType !== "voicemail" && (<span>tried to call on {props.to}</span>)}
                </div>
                <div>
                    time???
                </div>
            </Card>
        </Link>
    )
}

export default ActivityItem