export const ntc = {NTCID: 'notice/NTCID'};

export const getNtc = data => ({
    type: ntc.NTCID,
    data
});

const idInitialState = {
    data : 0,
}

export default function reducer(state = idInitialState, action) {
    switch (action.type) {
        case ntc.NTCID:
            return {
                ...state,
                data: action.data
            }
        default:
            return state

    }
}
