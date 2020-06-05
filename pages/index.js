import React from 'react';
import axios from 'axios';
import NoticeContainers from "../containers/NoticeContainers";

const Index = ({lists}) => {

    return (
        <>
            <NoticeContainers props={lists}/>
        </>
    )
};
Index.getInitialProps = async () => {
    const response = await axios.get('http://15.165.161.162:8086/api/web/notice/NoticeList?PAGE=1');
    return {
        lists : response.data.data[0].list
    }
};

export default Index;