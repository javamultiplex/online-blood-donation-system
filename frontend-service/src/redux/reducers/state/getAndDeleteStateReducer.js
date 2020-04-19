import * as types from '../../actions/state';
const initialState = {
    states: []
}

const getAndDeleteStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_STATES_SUCCESS:
            return {
                ...state,
                states: action.payload
            }
        case types.GET_ALL_STATES_ERROR:
            return {
                states: []
            }
        case types.DELETE_STATE_SUCCESS:
            return {
                ...state,
                states: state.states.filter(state => state.id !== action.payload)
            }
        default:
            return state;
    }
}

export default getAndDeleteStateReducer;