import {wrapper} from '../modules'

const WraapedApp = ({ Component, pageProps}) => {
    return <Component {...pageProps} />
};

export default wrapper.withRedux(WraapedApp);