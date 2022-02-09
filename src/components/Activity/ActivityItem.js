import React from 'react'
import Card from '../UI/Card'

const ActivityItem = (props) => {
    return (
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
    )
}

export default ActivityItem