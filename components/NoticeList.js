import React from 'react';
import Link from 'next/link';

const NoticeList = (props, {onChange, data}) => {

    const lists = props.props;

    return(
    <>
        <div>
            {lists && lists.map(list => (
                <>
                    <Link href='/noticeDetail'><li props={list} key={list.NTC_ID} data={data} onClick={onChange}>{list.NTC_TITLE}</li></Link>
                </>
            ))}
        </div>
    </>
    )

};

export default NoticeList;