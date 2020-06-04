import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
// 액션 & 리듀서가 추가될때마다 설정
import notice from './notice'

// 미들웨어는 액션이 dispatch 되어서 리듀서에서 이를 처리하기전에 사전에 지정된 작업들을 설정
// 액션과 리듀서 사이의 중간자

// 미들웨어 설정
// composeWithDevTools - 리덕스 툴
// redux-thunk 비동기 작업 처리할 때 가장 기본적으로 사용하는 미들웨어
// thunk - 특정 작업을 나중에 하도록 미루기 위해서 함수형태로 감싼 것을 칭함
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
};
// 액션 & 리듀서 추가하는 곳(하나의 리듀서로 통합하기 위한 작업)
const combinedReducer = combineReducers({
    notice
});
// TODO 알아보기
const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.data) nextState.data = state.data
        return nextState
    } else {
        return combinedReducer(state, action)
    }
};

const initStore = () => {
    // 여러 reducer를 combineReducers에 하나로 통합해서 담고 또 그것을 createStore에 전달해준다.
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
};

export const wrapper = createWrapper(initStore)