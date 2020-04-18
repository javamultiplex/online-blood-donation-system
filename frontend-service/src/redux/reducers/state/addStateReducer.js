import * as types from '../../actions/state';

const initialState = {
    output: ''
}

const addStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_STATE_SUCCESS:
            return {
                ...state,
                output: action.payload
            }
        default:
            return state;
    }
}

export default addStateReducer;
