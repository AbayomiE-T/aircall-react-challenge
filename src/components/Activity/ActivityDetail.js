import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import { getCallDetail } from '../../store/actions/activity-feed-actions';

const ActivityDetail = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const callDetail = useSelector((state) => state.activities.callDetail);

    useEffect(() => {
        dispatch(getCallDetail(id));
    }, [])

    return (
        <Fragment>
            {callDetail && (<h2>{callDetail.from}</h2>)}
            <button onClick={() => history.go(-1)}>Go back</button>
        </Fragment>
    )
}

export default ActivityDetail