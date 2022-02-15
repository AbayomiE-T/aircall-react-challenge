import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'

const ActivityItem = (props) => {
    const date = new Date(props.date);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

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
                    {`${hours}:${minutes}` + meridiem}
                </div>
            </Card>
        </Link>
    )
}

export default ActivityItem