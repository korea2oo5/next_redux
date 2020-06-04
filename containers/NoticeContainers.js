import NoticeList from "../components/NoticeList";
import React from 'react';

const NoticeContainers = (props) => {
    return (
        <>
            <NoticeList props={props.props} />
        </>
    )
};

export default NoticeContainers;

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import NoticeList from "../components/NoticeList";
// import { getNtc } from '../modules/notice';
//
// class NoticeContainers extends Component {
//     handleSelect = data =>{
//         const { getNtc } = this.props;
//         getNtc(data)
//     };
//
//     render() {
//         const { data, props } = this.props;
//         return <NoticeList props={props} onSelect={this.handleSelect} selected={data}/>
//     }
// }
//
// const mapStateToProps = state => ({
//     data: state.notice.data
// });
// const mapDispatchToProps = dispatch => ({
//     getNtc: data => dispatch(getNtc(data))
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(NoticeContainers);