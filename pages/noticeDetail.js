import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import { getNtc } from '../modules/notice'
import axios from 'axios';

const noticeDetail = ({info}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNtc());
    }, [])

    const NtcId = useSelector(state => state.notice.data);
    console.log(NtcId)
    return (
        <>
            <h1>
                {info.NTC_TITLE}
            </h1>
            <div>
                공지사항 내용
            </div>
            <div>
                {info.NTC_CONTENT}
            </div>
            {info.NTC_REG_DT}
            <div>
                <span>삭제</span> <span>수정</span>
            </div>

        </>
    )
};

noticeDetail.getInitialProps = async () => {

    const response = await axios.get('http://15.165.161.162:8086/api/web/notice/NoticeInfo',{
        params: {
            NTC_ID : 269
        }
    });
    return {
        info : response.data.data[0]
    }
};

export default noticeDetail;
