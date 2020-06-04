import React from "react";
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import { getNtc } from '../modules/notice'

const NoticeList = (props) => {

    const lists = props.props;

    const dispatch = useDispatch();

    return(
        <>
            <div>
                {lists && lists.map(list => (
                    <>
                        <Link href='/noticeDetail'><li props={list} key={list.NTC_ID} onClick={() => dispatch(getNtc(list.NTC_ID))}>{list.NTC_TITLE}</li></Link>
                    </>
                ))}
            </div>
        </>
    )

};

export default NoticeList;