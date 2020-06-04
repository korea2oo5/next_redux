import NoticeList from "../components/NoticeList";
import React, { useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getNtc } from '../modules/notice'

const NoticeContainers = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.notice.data);
    const OnChange = useCallback(() => dispatch(getNtc()), [dispatch]);

    return (
        <>
            <NoticeList props={props.props} onChange={OnChange} data={data}/>
        </>
    )
};

export default NoticeContainers;